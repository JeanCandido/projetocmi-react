import Footer from "./struture/Footer"
import Header from "./struture/Header"

import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
