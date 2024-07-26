import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./page/error.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./page/loginPage/login.jsx";
import SignUpPage from "./page/Register/register.jsx";
import SettingPage from "./page/setting.jsx";
import Home from "./page/Home.jsx";
import Update from "./page/update.jsx";
import Book from "./page/book.jsx";
import {AuthWrapper} from "./component/context/auth.context.jsx"

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
                path: "/sign-up",
                element: <SignUpPage />,
            },
            {
                path: "/book.manage",
                element: <Book/>,
            },
            {
                path: "/update",
                element: <Update/>,
            },
            {
                path: "/setting",
                element: <SettingPage/>,
            },
        ],

    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthWrapper>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </AuthWrapper>

)
