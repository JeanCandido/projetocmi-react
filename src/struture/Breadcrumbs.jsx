import { FaHome, FaPhone, FaWrench } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation()

    const crumbs =  location.pathname.split('/')
    
    let text = ''
    
    console.log(crumbs[1])



    if (crumbs[1] == 'servicos'){
        text = <p className="flex items-center gap-1"><FaWrench/> Serviços</p>
    }else if(crumbs[1] == 'contato'){
        text = <p className="flex items-center gap-1"><FaPhone/> Contato</p>
    }

    return(
        <div className="breadcrumbs gap-1 p-4 text-zinc-600">
            <Link to={'/'} className="flex items-center gap-1"><FaHome/>Home/{text}</Link>
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