export default function Contact() {
    
    return(
        <div className="p-4 flex flex-col items-center justify-center md:flex-row flex-wrap md:gap-8 md:mb-32" >
            <div className=" mb-4 flex flex-col gap-4 text-center w-full">
                <h1 className=" font-bold text-3xl md:text-4xl">Contate-nos</h1>
                <p className=" md:text-xl">Mande uma mensagem atravéz do Whatsapp, email ou nos ligue</p>
                <address className=" not-italic md:text-xl">Nos localizamos na Rua Emilia Serra Otranto Nº30 CHACARAS SÃO MARTINHO, em Campinas-SP</address>
            </div>
            <section className=" flex flex-col gap-4 text-center md:gap-16 ">
                <div>
                    <h2 className="mb-2 font-semibold text-xl">Entre em contato pelo Whatsapp</h2>
                    <a href="https://wa.me/5519982135603?text=Gostaria de contratar um serviço" className=" bg-black p-2 rounded-lg text-slate-50 hover:bg-cmi-1 hover:text-black">Whatsapp</a>
                </div>
                <div>
                    <h2 className="mb-2 font-semibold text-xl">Entre em contato pelo Email</h2>
                    <a href="mailto:email@provedor.com.br?subject=CMI Enganharia&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Quero fazer um orçamento de um elevador" className=" bg-black p-2 rounded-lg text-slate-50 hover:bg-cmi-1 hover:text-black">contato@cmiengenharia.com</a>
                </div>
                <div>
                    <h2 className="mb-2 font-semibold text-xl">Nos ligue</h2>
                    <a href=" tel:+5519982135603" className=" bg-black p-2 rounded-lg text-slate-50 hover:bg-cmi-1 hover:text-black"> (19) 982135603</a>
                </div>
            </section>
            <section className=" h-80 w-80 p-4 md:h-96 md:w-3/4 max-w-96 ">
                <iframe className="rounded-lg border-4 border-cmi-2" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=CMI%20Engenharia%20rua%20emilia%20serra%20otranto+(CMI%20Engenharia)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
            </section>
        </div>
    )
}