import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'

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
      },
      {
        path: 'clientes',
        element: <Client/>
      },
      {
        path: 'informacoes',
        element: <Information/>
      },
      {
        path: 'galeria',
        element: <Gallery/>
      },
    ]
  },
])

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ErrorPage from './pages/ErrorPage.jsx'
import Services from './pages/Services.jsx'
import Company from './pages/Company.jsx'
import Client from './pages/Client.jsx'
import Information from './pages/Information.jsx'
import Gallery from './pages/Gallery.jsx'
import BtnService from './elements/BtnInfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
