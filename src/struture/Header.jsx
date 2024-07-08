import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../imgs/logo/logo.png"
import { FaBars } from "react-icons/fa"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <header className=" bg-black  h-24 p-4 flex">
            <div className="w-3/5 sm:w-4/5 flex align-center">
                <img src={logo} alt="logo"/>
            </div>
            <div className="z-50 flex flex-col items-center w-2/5 sm:w-1/5" >
                <button onClick={() => setMenuOpen(!menuOpen)} className=" text-slate-50 pt-6"><FaBars/></button>

                {menuOpen && (
                    <nav className=" text-slate-50 h-full ml-auto w-full">
                        <ul className=" bg-black  flex flex-col items-center w-full p-3">
                            <Link to="/">
                                <li className=" hover:bg-cmi-2 hover:text-black p-1 rounded">Home</li>
                            </Link>
                            <Link to="/empresa">
                                <li className=" hover:bg-cmi-2 hover:text-black p-1 rounded">Empresa</li>
                            </Link>
                            <Link to="/servicos">
                                <li className=" hover:bg-cmi-2 hover:text-black p-1 rounded">Serviços</li>
                            </Link>
                            <Link to="/clientes">
                                <li className=" hover:bg-cmi-2 hover:text-black p-1 rounded">Clientes</li>
                            </Link>
                            <Link to="/informacoes">
                                <li className=" hover:bg-cmi-2 hover:text-black p-1 rounded">Informações</li>
                            </Link>
                            <Link to="/contato">
                                <li className=" hover:bg-cmi-2 hover:text-black p-1 rounded">Contato</li>
                            </Link>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header

/*
            <nav className=" text-slate-50 h-full ml-auto">
                <ul className=" flex items-center h-full">
                    <Link to="/">
                        <li className=" pr-4">Home</li>
                    </Link>
                    <Link to="/empresa">
                        <li className=" pr-4">Empresa</li>
                    </Link>
                    <Link to="/servicos">
                        <li className=" pr-4">Serviços</li>
                    </Link>
                    <Link to="/clientes">
                        <li className=" pr-4">Clientes</li>
                    </Link>
                    <Link to="/informacoes">
                        <li className=" pr-4">Informações</li>
                    </Link>
                    <Link to="/contato">
                        <li className=" pr-4">Contato</li>
                    </Link>
                </ul>
            </nav>
*/