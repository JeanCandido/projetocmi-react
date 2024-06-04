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