import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import content1 from '../assets/c1.jpeg'
import content2 from '../assets/c2.jpeg'
import content3 from '../assets/c3.jpeg'
import content4 from '../assets/c4.jpeg'
import content5 from '../assets/c5.jpeg'
import content6 from '../assets/c6.jpeg'
import content7 from '../assets/c7.jpeg'
import content8 from '../assets/c8.jpeg'
import content9 from '../assets/c9.jpeg'
import avatar1 from '../assets/a1.png'
import avatar2 from '../assets/a2.png'
import avatar3 from '../assets/a3.png'
import avatar4 from '../assets/a4.png'
import avatar5 from '../assets/a5.png'
import avatar6 from '../assets/a6.png'
import avatar7 from '../assets/a7.png'
import avatar8 from '../assets/a8.png'
import avatar9 from '../assets/a9.png'

export const CourseContext = createContext()
const CourseContextProvider = (props) => {

    const [courses, setCourses] = useState([
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content1, avatar: avatar1 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content2, avatar: avatar2 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content3, avatar: avatar3 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content4, avatar: avatar4 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content5, avatar: avatar5 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content6, avatar: avatar6 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content7, avatar: avatar7 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content8, avatar: avatar8 },
        { id: uuidv4(), title: "Big 4 Auditor Financial Analyst", description: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik", instructor: "Jenna Ortega", price: "Rp 300K", company: "Gojek", rating: 3.5, image: content9, avatar: avatar9 },
    ])

    return (
        <CourseContext.Provider value={[courses, setCourses]}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider   