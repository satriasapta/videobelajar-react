/* eslint-disable no-undef */
import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';
import fs from 'fs';
import {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
    createUser,
    getUserByEmail
} from './database.js';
import { verifyToken } from './authMiddleware.js';
import { pool } from './database.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const ensureDirectoryExistence = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = join(__dirname, 'src/assets');
        ensureDirectoryExistence(uploadPath); // Ensure directory exists
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
    }
});
const upload = multer({ storage: storage });

app.use(express.json());

app.post("/register", async (req, res) => {
    const { fullname, username, password, email, phone } = req.body;
    try {
        const newUser = await createUser(fullname, username, password, email, phone);
        res.status(201).send({ message: "User registered successfully!", user: newUser });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.send({
            message: 'Login successful',
            token,
            user: { id: user.id, fullname: user.fullname, email: user.email }
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.get("/courses", verifyToken, async (req, res) => {
    const { company, sortBy, order, search, instructor } = req.query;

    let query = 'SELECT * FROM kursus WHERE 1=1';
    if (company) {
        query += ` AND company = ${pool.escape(company)}`;
    }
    if (instructor) {
        query += ` AND instructor LIKE ${pool.escape('%' + instructor + '%')}`;
    }
    if (search) {
        query += ` AND (title LIKE ${pool.escape('%' + search + '%')} OR description LIKE ${pool.escape('%' + search + '%')})`;
    }
    if (sortBy) {
        const orderBy = sortBy === 'price' || sortBy === 'rating' ? sortBy : 'id';
        const sortOrder = order === 'desc' ? 'DESC' : 'ASC';
        query += ` ORDER BY ${orderBy} ${sortOrder}`;
    }
    try {
        const [courses] = await pool.query(query);
        res.send(courses);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/courses/:id", verifyToken, async (req, res) => {
    const id = req.params.id;
    try {
        const course = await getCourseById(id);
        res.send(course);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

app.post("/courses", verifyToken, upload.fields([{ name: 'image' }, { name: 'avatar' }]), async (req, res) => {
    const { title, description, instructor, price, company, rating } = req.body;
    const image = req.files['image'] ? req.files['image'][0].filename : null;
    const avatar = req.files['avatar'] ? req.files['avatar'][0].filename : null;

    try {
        const result = await createCourse(title, description, instructor, price, company, rating, image, avatar);
        res.status(201).send(result);
    } catch (err) {
        console.error('Error during course creation:', err);
        res.status(500).send({ error: err.message });
    }
});

app.put("/courses/:id", verifyToken, upload.fields([{ name: 'image' }, { name: 'avatar' }]), async (req, res) => {
    const id = req.params.id;
    const { title, description, instructor, price, company, rating } = req.body;

    const existingCourse = await getCourseById(id);
    if (!existingCourse) {
        return res.status(404).send({ error: "Course not found" });
    }

    const image = req.files['image'] ? req.files['image'][0].filename : existingCourse.image;
    const avatar = req.files['avatar'] ? req.files['avatar'][0].filename : existingCourse.avatar;

    try {
        const result = await updateCourse(id, { title, description, instructor, price, company, rating, image, avatar });
        res.send(result);
    } catch (err) {
        res.status(404).send({ error: err.message });
    }
});


app.delete("/courses/:id", verifyToken, async (req, res) => {
    const id = req.params.id;
    try {
        const course = await getCourseById(id);
        if (!course) {
            return res.status(404).send({ message: "Course not found" });
        }

        const assetsPath = path.join(__dirname, 'src/assets');

        if (course.image) {
            const imagePath = path.join(assetsPath, course.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }
        if (course.avatar) {
            const avatarPath = path.join(assetsPath, course.avatar);
            if (fs.existsSync(avatarPath)) {
                fs.unlinkSync(avatarPath);
            }
        }
        const result = await deleteCourse(id);
        res.send(result);
    } catch (err) {
        console.error("Error deleting course:", err.message);
        res.status(500).send({ error: err.message });
    }
});

app.get('/verifikasi-email', async (req, res) => {
    const { token } = req.query;

    try {
        const [user] = await pool.query('SELECT * FROM user WHERE verification_token = ?', [token]);

        if (user.length === 0) {
            return res.status(400).send({ message: "Invalid Verification Token" });
        }
        await pool.query('UPDATE user SET verification_token = NULL WHERE id = ?', [user[0].id]);

        res.send({ message: "Email Verified Successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
});
app.listen(8080, () => console.log('Server is running on port 8080'));
