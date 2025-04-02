import { useState } from "react";
import { FaPhone, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";


export default function Services(props) {
    const [ItemOpen, setItemOpen] = useState(false);
    return(
            <div>
                <div className=" max-w-xs flex flex-col p-4 cursor-pointer" onClick={()=> setItemOpen(!ItemOpen)}>
                    <img src={props.src} alt={props.alt} className="h-52 w-52 rounded-tr-xl rounded-tl-xl object-cover"/>
                    <h2 className=" bg-cmi-2 p-4 text-sm font-bold text-center w-52 rounded-br-xl rounded-bl-xl">{props.alt}</h2>
                </div>
                {ItemOpen && (
                    <div className=" h-vh w-vw fixed  bg-gray-790 top-0 left-0 transition" onClick={() => setItemOpen(!ItemOpen)}>
                        <div className="opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md flex flex-col items-center justify-center gap-4 p-8 rounded-lg">
                            <img src={props.src} alt={props.alt} className=" max-w-52 md:max-w-5xl"/>
                            <p className=" text-xl text-center">{props.content}</p>
                            <div className="flex gap-2">    
                                <a href="https://wa.me/5519999555586?text=Gostaria de contratar um serviço" className=" bg-cmi-2 rounded p-4 "><FaWhatsapp/></a>
                                <a href="mailto:cmiengenharia@cmiengenharia.com?subject=CMI Enganharia&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Quero fazer um orçamento de um elevador" className=" bg-cmi-2 rounded p-4"><FaRegEnvelope/></a>
                                <a href="tel:+5519999555586" className=" bg-cmi-2 rounded p-4"><FaPhone/></a>
                            </div>
                            <button onClick={() => setItemOpen(!ItemOpen)} className=" bg-cmi-2 p-2 rounded text-xl" >Fechar</button>
                        </div>
                    </div>
                )}
            </div>
    )
}