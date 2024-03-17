import { Layout } from "components/Layout/Layout";
import Contacts from "pages/Contacts";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/tasks',
                element: <Contacts />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])