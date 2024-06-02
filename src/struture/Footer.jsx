import { FaWhatsapp , FaRegEnvelope, FaPhone } from "react-icons/fa"

function Footer(){
    return(
        <footer className=" p-4 bg-black w-full h-28 text-slate-50 flex sm:h-24">
            <div id="informs" className=" w-2/3">
                <h3>CMI-Engenharia Montagem Industiral</h3>
                <p className="h-12">Rua Emilia Serra Otranto - N°30 - CHACARAS SAO MARTINHO - Campinas-SP - CEP: 13042-834</p>
            </div>
            <div id="icons" className=" flex items-center w-1/3 justify-center text-xl">
                <a href="https://wa.me/5519982135603?text=Gostaria de contratar um serviço" className=" bg-cmi-4 p-2 mr-4 rounded"><FaWhatsapp/></a>
                <a href="mailto:email@provedor.com.br?subject=CMI Enganharia&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Quero fazer um orçamento de um elevador" className=" bg-cmi-4 p-2 mr-4 rounded"><FaRegEnvelope/></a>
                <a href="tel:+5519982135603" className=" bg-cmi-4 p-2 mr-4 rounded"><FaPhone/></a>
            </div>
        </footer>
    )
}

export default Footer