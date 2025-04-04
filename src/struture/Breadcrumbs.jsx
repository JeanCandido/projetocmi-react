import { FaBuilding, FaHome, FaPhone, FaWrench } from "react-icons/fa"
import { FaCircleInfo, FaPerson, FaPhotoFilm } from "react-icons/fa6"
import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation()

    const crumbs =  location.pathname.split('/')
    
    let text = ''
    
    console.log(crumbs[1])



    if (crumbs[1] == 'servicos'){
        text = <p className="flex items-center gap-1">/ <FaWrench/> Serviços</p>
    }else if(crumbs[1] == 'contato'){
        text = <p className="flex items-center gap-1">/ <FaPhone/> Contato</p>
    }else if(crumbs[1] == 'empresa'){
        text = <p className="flex items-center gap-1">/ <FaBuilding/> Empresa</p>
    }else if(crumbs[1] == 'informacoes'){
        text = <p className="flex items-center gap-1">/ <FaCircleInfo/> Informações</p>
    }else if(crumbs[1] == 'clientes'){
        text = <p className="flex items-center gap-1">/ <FaPerson/> Clientes</p>
    }else if(crumbs[1] == 'adequacao-elevador-cremalheira'){
        text = <p className="flex items-center gap-1">/ <Link to={'/informacoes'} className="flex items-center gap-1"><FaCircleInfo/> Informações</Link></p>
    }else if(crumbs[1] == 'galeria'){
        text = <p className="flex items-center gap-1">/ <FaPhotoFilm/> Galeria</p>
    }

    return(
        <div className="breadcrumbs gap-1 p-4 text-zinc-600">
            <Link to={'/'} className="flex items-center gap-1"><FaHome/>Home{text}</Link>
        </div>
    )
}


/*
import { FaHome } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation()

    let currentLink = ''

    const crumbs =  location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink =+ `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return(
        <div className="breadcrumbs gap-1 p-4">
            <Link to={'/'} className="flex items-center"><FaHome/>Home/{crumbs}</Link>
        </div>
    )
}
*/