import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Beranda from "./pages/beranda.jsx"
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx"
import './index.css'
import CourseContextProvider from "./contexts/CourseContext.jsx"
import Kursus from "./pages/Kursus.jsx"
import TambahKursus from "./components/kursus/TambahKursus.jsx"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Beranda />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/kursus",
      element: <Kursus />
    },
    {
      path: "/tambahkursus",
      element: <TambahKursus />
    }
  ])
  return (
    <CourseContextProvider>
      <RouterProvider router={router} />
    </CourseContextProvider>
  )
}

export default App
