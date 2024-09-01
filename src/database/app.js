import express from 'express'
import { getCourses, getCourseById, createCourse } from './database.js'
const app = express()

app.use(express.json())

app.get("/courses", async (req, res) => {
    const courses = await getCourses()
    res.send(courses)
})
app.get("/courses/:id", async (req, res) => {
    const id = req.params.id
    const course = await getCourseById(id)
    res.send(course)
})

app.post("/courses", async (req, res) => {
    const { title, description, instructor, price, company, rating, image, avatar } = req.body
    const result = await createCourse(title, description, instructor, price, company, rating, image, avatar)
    res.status(201).send(result)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => console.log('Server is running on port 8080'))