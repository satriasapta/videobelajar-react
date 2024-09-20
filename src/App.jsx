import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Beranda from "./pages/beranda.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Kursus from "./pages/Kursus.jsx";
import './index.css';
import { Provider } from "react-redux";
import store from './store/redux/store';
import PrivateRoute from './PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Beranda />
        </PrivateRoute>
      )
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
      element: <PrivateRoute>
        <Kursus />
      </PrivateRoute>
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
