import { Link } from "react-router-dom";


export default function Services(props) {
    return(
            <Link to={props.to} className=" max-w-xs flex flex-col p-4">
                <img src={props.src} alt={props.alt} className="h-52 w-52"/>
                <h2 className=" bg-cmi-2 p-4 text-sm font-bold text-center w-52">{props.alt}</h2>
            </Link>
    )
}