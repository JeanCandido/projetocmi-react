import { FaWhatsapp , FaRegEnvelope, FaPhone } from "react-icons/fa"

function Footer(){
    return(
        <footer className=" p-4 bg-black w-full h-28 text-slate-50 flex sm:h-24 ">
            <div id="informs" className=" w-2/3 flex flex-col justify-center text-xs sm:text-sm">
                <h3>CMI-Engenharia Montagem Industiral</h3>
                <p>Rua Emilia Serra Otranto - N°200 - CHACARAS SAO MARTINHO - Campinas-SP - CEP: 13042-834</p>
            </div>
            <div id="icons" className=" flex flex-col gap-2 items-center w-1/3 justify-center text-xl sm:flex-row ">
                <a href="https://wa.me/5519982135603?text=Gostaria de contratar um serviço" className=" bg-cmi-4 rounded p-1"><FaWhatsapp/></a>
                <a href="mailto:email@provedor.com.br?subject=CMI Enganharia&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Quero fazer um orçamento de um elevador" className=" bg-cmi-4 rounded p-1"><FaRegEnvelope/></a>
                <a href="tel:+5519982135603" className=" bg-cmi-4 rounded p-1"><FaPhone/></a>
            </div>
        </footer>
    )
}

export default Footer