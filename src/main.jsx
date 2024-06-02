import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/projetocmi-react',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projetocmi-react/',
        element: <Home />
      },
      {
        path: 'projetocmi-react/contato',
        element: <Contact />
      }
    ]
  },
])

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ErrorPage from './pages/ErrorPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
