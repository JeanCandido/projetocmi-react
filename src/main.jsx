import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Contato',
        element: <Contact />
      },
      {
        path: 'Servicos',
        element: <Services/>
      }
    ]
  },
])

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ErrorPage from './pages/ErrorPage.jsx'
import Services from './pages/Services.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
