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
        path: 'contato',
        element: <Contact />
      },
      {
        path: 'servicos',
        element: <Services/>
      },
      {
        path: 'empresa',
        element: <Company/>
      }
    ]
  },
])

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ErrorPage from './pages/ErrorPage.jsx'
import Services from './pages/Services.jsx'
import Company from './pages/Company.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
