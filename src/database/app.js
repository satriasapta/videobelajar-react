import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getCourses, getCourseById, createCourse, updateCourse, deleteCourse, createUser, getUserByEmail } from './database.js'
import { verifyToken } from './authMiddleware.js'
const app = express()

app.use(express.json())

app.post("/register", async (req, res) => {
    const { fullname, username, password, email } = req.body;
    try {
        const newUser = await createUser(fullname, username, password, email);
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
        // console.log("Hashed Password in DB:", user.password);
        // console.log("Password entered:", password);
        // console.log("Password match result:", isMatch);
        if (!isMatch) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            // eslint-disable-next-line no-undef
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
    try {
        const courses = await getCourses()
        res.send(courses)
    } catch (err) {
        res.status(500).send(err.message)
    }
})
app.get("/courses/:id", verifyToken, async (req, res) => {
    const id = req.params.id
    try {
        const course = await getCourseById(id)
        res.send(course)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

app.post("/courses", verifyToken, async (req, res) => {
    const { title, description, instructor, price, company, rating, image, avatar } = req.body
    try {
        const result = await createCourse(title, description, instructor, price, company, rating, image, avatar)
        res.status(201).send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.put("/courses/:id", verifyToken, async (req, res) => {
    const id = req.params.id
    const { title, description, instructor, price, company, rating, image, avatar } = req.body
    try {
        const result = await updateCourse(id, { title, description, instructor, price, company, rating, image, avatar })
        res.send(result)
    } catch (err) {
        res.status(404).send({ error: err.message })
    }
})

app.delete("/courses/:id", verifyToken, async (req, res) => {
    const id = req.params.id
    try {
        const result = await deleteCourse(id)
        res.send(result)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
})

app.use((err, req, res) => {
    console.error(err.stack)
    res.status(500).send({ error: 'Something broke!' })
})




app.listen(8080, () => console.log('Server is running on port 8080'))