import { FaBuilding, FaHome, FaPhone, FaWrench } from "react-icons/fa";
import { FaCircleInfo, FaPerson, FaPhotoFilm } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const breadcrumbMap = {
  servicos: { label: "Serviços", icon: <FaWrench /> },
  contato: { label: "Contato", icon: <FaPhone /> },
  empresa: { label: "Empresa", icon: <FaBuilding /> },
  informacoes: { label: "Informações", icon: <FaCircleInfo /> },
  clientes: { label: "Clientes", icon: <FaPerson /> },
  galeria: { label: "Galeria", icon: <FaPhotoFilm /> },
  "vendas-midas": { label: "Venda Midas", icon: null },
  "adequacao-elevador-cremalheira": {
    label: "Informações",
    icon: <FaCircleInfo />,
    path: "/informacoes",
  },
};

export default function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter(Boolean);

  const paths = crumbs.map((crumb, idx) => {
    const path = "/" + crumbs.slice(0, idx + 1).join("/");
    const isLast = idx === crumbs.length - 1;
    const item = breadcrumbMap[crumb];

    if (!item) return null;

    const content = (
      <span className="flex items-center gap-1">
        {item.icon}
        {item.label}
      </span>
    );

    return (
      <span key={path} className="flex items-center gap-1">
        /
        {isLast ? (
          content
        ) : (
          <Link to={item.path || path} className="flex items-center gap-1">
            {content}
          </Link>
        )}
      </span>
    );
  });

  return (
    <div className="breadcrumbs gap-1 p-4 text-zinc-600 flex items-center">
      <Link to="/" className="flex items-center gap-1">
        <FaHome /> Home
      </Link>
      {paths}
    </div>
  );
}


/* import { FaBuilding, FaHome, FaPhone, FaWrench } from "react-icons/fa"
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
    }else if(crumbs[1] == 'galeria' && crumbs[2] == 'vendas-midas'){
        text = <p className="flex items-center gap-1">/ <FaPhotoFilm/> Galeria/Venda Midas</p>
    }else if(crumbs[1] == 'galeria'){
        text = <p className="flex items-center gap-1">/ <FaPhotoFilm/> Galeria</p>
    }

    return(
        <div className="breadcrumbs gap-1 p-4 text-zinc-600 flex">
            <Link to="/" className="flex items-center gap-1"><FaHome /> Home</Link>
            {crumbs[1] === 'galeria' && !crumbs[2] && (
                <span className="flex items-center gap-1">/ <FaPhotoFilm /> Galeria</span>
            )}
            {crumbs[1] === 'galeria' && crumbs[2] === 'vendas-midas' && (
                <>
                <span className="flex items-center gap-1">/ <Link to="/galeria" className="flex items-center gap-1"><FaPhotoFilm /> Galeria</Link></span>
                <span className="flex items-center gap-1">/ Venda Midas</span>
                </>
            )}
        </div>
    )
} */


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