/* eslint-disable no-undef */
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
}).promise()

async function createUser(fullname, username, password, email, phone) {
    try {
        const [existingUser] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);

        if (existingUser.length > 0) {
            throw new Error('Email already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const verificationToken = uuidv4();
        const [result] = await pool.query(
            'INSERT INTO user (fullname, username, password, email, phone, verification_token) VALUES (?, ?, ?, ?, ?, ?)',
            [fullname, username, hashedPassword, email, phone, verificationToken]
        );
        const id = result.insertId;
        const newUser = await getUserById(id);
        await sendVerificationEmail(email, verificationToken);

        return newUser;
    } catch (err) {

        throw new Error("Error Creating User: " + err.message);
    }
}
async function sendVerificationEmail(toEmail, token) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const verificationLink = `http://localhost:8080/verifikasi-email?token=${token}`;

    const mailOptions = {
        from: '"EduCourse" <satriasapta77@gmail.com>',
        to: toEmail,
        subject: 'Email Verification',
        html: `<h3>Please verify your email</h3><p>Click the link below to verify your email address:</p><a href="${verificationLink}">Verify Email</a>`
    };

    await transporter.sendMail(mailOptions);
}

async function getUserById(id) {
    try {
        const [rows] = await pool.query('SELECT * FROM user WHERE id = ?', [id]);
        return rows[0];
    } catch (err) {
        throw new Error("Error Fetching User: " + err.message);
    }
}

async function getUserByEmail(email) {
    try {
        const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        return rows[0];
    } catch (err) {
        throw new Error("Error Fetching User by Email: " + err.message);
    }
}

async function getCourses() {
    try {
        const [rows] = await pool.query('SELECT * FROM kursus')
        return rows
    } catch (err) {
        throw new Error("Error Fetching Courses: " + err.message)
    }
}
async function getCourseById(id) {
    try {
        const [rows] = await pool.query(`SELECT * FROM kursus WHERE id = ${id}`)
        return rows[0]
    } catch (err) {
        throw new Error("Error Fetching Course: " + err.message)
    }
}

async function createCourse(title, description, instructor, price, company, rating, image, avatar) {
    try {

        const [result] = await pool.query(
            'INSERT INTO kursus (title, description, instructor, price, company, rating, image, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [title, description, instructor, price, company, rating, image, avatar]
        )
        const id = result.insertId
        return getCourseById(id)
    } catch (err) {
        throw new Error("Error Creating Course: " + err.message)
    }
}

async function updateCourse(id, data) {
    try {
        const fields = Object.keys(data).map(field => `${field} = ?`).join(', ')
        const values = Object.values(data)
        const [result] = await pool.query(`UPDATE kursus SET ${fields} WHERE id = ?`, [...values, id])
        if (result.affectedRows === 0) {
            throw new Error(`Course with id ${id} not found`)
        }
        return await getCourseById(id);
    } catch (err) {
        throw new Error("Error Updating Course: " + err.message)
    }
}

async function deleteCourse(id) {
    const [result] = await pool.query('DELETE FROM kursus WHERE id = ?', [id])
    if (result.affectedRows === 0) {
        throw new Error(`Course with id ${id} not found`)
    }
    return {
        message: `Course with id ${id} deleted successfully`
    }
}

export { pool, getCourses, getCourseById, createCourse, updateCourse, deleteCourse, createUser, getUserById, getUserByEmail }