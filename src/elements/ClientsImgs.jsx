import { useState } from "react"

export default function ClientsImgs(props) {
    const [clientOpen, setClientOpen] = useState(false);

    return(        
        <div>
            <div className=" w-60 max-h-52 flex items-center justify-center m-10">
                <img className="cursor-pointer" src={props.src} alt={props.alt} onClick={() => setClientOpen(!clientOpen)} />
            </div>
            {clientOpen && (

                <div className=" h-vh w-vw fixed  bg-gray-790 top-0 left-0 transition" onClick={() => setClientOpen(!clientOpen)}> 
                    <div className="opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md flex flex-col items-center justify-center gap-4 p-8 rounded-lg">
                        <img src={props.src} alt={props.alt} className="max-w-52 md:max-w-5xl"/>
                        <p className=" text-xl text-center">{props.alt}</p>
                        <button onClick={() => setClientOpen(!clientOpen)} className=" bg-cmi-2 p-2 rounded text-xl" >Fechar</button>
                    </div>
                </div>
            )}
        </div>
    )
}