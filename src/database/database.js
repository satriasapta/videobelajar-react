/* eslint-disable no-undef */
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
}).promise()

async function getCourses() {
    const [rows] = await pool.query('SELECT * FROM kursus')
    return rows
}
async function getCourseById(id) {
    const [rows] = await pool.query(`SELECT * FROM kursus WHERE id = ${id}`)
    return rows
}

async function createCourse(title, description, instructor, price, company, rating, image, avatar) {
    const [result] = await pool.query(
        'INSERT INTO kursus (title, description, instructor, price, company, rating, image, avatar) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [title, description, instructor, price, company, rating, image, avatar]
    )
    const id = result.insertId
    return getCourseById(id)
}

async function updateCourse(id, data) {
    const fields = Object.keys(data).map(field => `${field} = ?`).join(', ')
    const values = Object.values(data)

    await pool.query(`UPDATE kursus SET ${fields} WHERE id = ?`, [...values, id])
    return getCourseById(id);
}

async function deleteCourse(id) {
    await pool.query('DELETE FROM kursus WHERE id = ?', [id])
    return { message: `Course with id ${id} deleted successfully` }
}

export { getCourses, getCourseById, createCourse, updateCourse, deleteCourse }