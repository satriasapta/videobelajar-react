import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Beranda from "./pages/beranda.jsx"
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx"
import './index.css'
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
    }
  ])
  return (

    <RouterProvider router={router} />
  )
}

export default App
