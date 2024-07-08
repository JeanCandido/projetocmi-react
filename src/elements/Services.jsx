import { Link } from "react-router-dom";


export default function Services(props) {
    return(
            <Link to={props.to} className=" w-full max-w-xs flex flex-col p-4 ">
                <img src={props.src} alt={props.alt} />
                <h2 className=" bg-cmi-2 p-4 text-2xl font-bold text-center">{props.alt}</h2>
            </Link>
    )
}