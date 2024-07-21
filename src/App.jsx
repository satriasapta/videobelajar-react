import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Beranda from "./pages/beranda.jsx"
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx"
import './index.css'
import Kursus from "./pages/Kursus.jsx"
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
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
