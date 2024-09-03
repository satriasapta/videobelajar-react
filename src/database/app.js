import express from 'express'
import { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } from './database.js'
const app = express()

app.use(express.json())

app.get("/courses", async (req, res) => {
    try {
        const courses = await getCourses()
        res.send(courses)
    } catch (err) {
        res.status(500).send(err.message)
    }
})
app.get("/courses/:id", async (req, res) => {
    const id = req.params.id
    try {
        const course = await getCourseById(id)
        res.send(course)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

app.post("/courses", async (req, res) => {
    const { title, description, instructor, price, company, rating, image, avatar } = req.body
    try {
        const result = await createCourse(title, description, instructor, price, company, rating, image, avatar)
        res.status(201).send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.put("/courses/:id", async (req, res) => {
    const id = req.params.id
    const { title, description, instructor, price, company, rating, image, avatar } = req.body
    try {
        const result = await updateCourse(id, { title, description, instructor, price, company, rating, image, avatar })
        res.send(result)
    } catch (err) {
        res.status(404).send({ error: err.message })
    }
})

app.delete("/courses/:id", async (req, res) => {
    const id = req.params.id
    try {
        const result = await deleteCourse(id)
        res.send(result)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({ error: 'Something broke!' })
})



app.listen(8080, () => console.log('Server is running on port 8080'))