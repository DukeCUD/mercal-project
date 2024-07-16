import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./page/error.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./page/login.jsx";
import BookPage from "./page/book.user.jsx";
import RegisterPage from "./page/register.jsx";
import SettingPage from "./page/setting.jsx";
import Home from "./page/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/book",
                element: <BookPage/>,
            },

            {
                path: "/setting",
                element: <SettingPage/>,
            },
        ],

    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
