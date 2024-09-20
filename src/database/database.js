/* eslint-disable no-undef */
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'

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

        const [result] = await pool.query(
            'INSERT INTO user (fullname, username, password, email, phone) VALUES (?, ?, ?, ?, ?)',
            [fullname, username, hashedPassword, email, phone]
        );

        const id = result.insertId;
        return getUserById(id);
    } catch (err) {
        throw new Error("Error Creating User: " + err.message);
    }
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

export { getCourses, getCourseById, createCourse, updateCourse, deleteCourse, createUser, getUserById, getUserByEmail }