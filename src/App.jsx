import Breadcrumbs from "./struture/Breadcrumbs"
import Footer from "./struture/Footer"
import Header from "./struture/Header"

import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
