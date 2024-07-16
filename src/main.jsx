import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./page/error.jsx";
import HomeUpperPart from "./page/homePage/HomeUpperPart";
import "./main.css"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./page/login.jsx";
import BookPahe from "./page/book.user.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomeUpperPart />,
            },
            {
                path: "/users",
                element: <LoginPage />,
            },
            {
                path: "/books",
                element: <BookPahe/>,
            },
        ],

    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
