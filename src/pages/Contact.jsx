function Contact() {
    return(
        <div className="p-4">
            <div className=" mb-4 flex flex-col gap-4 text-center">
                <h1 className=" font-bold text-3xl">Contate-nos</h1>
                <p>Mande uma mensagem atravéz do Whatsapp, email ou nos ligue</p>
                <address className=" not-italic">Nos localizamos na Rua Emilia Serra Otranto Nº30 CHACARAS SÃO MARTINHO, em Campinas-SP</address>
            </div>
            <section className=" flex flex-col gap-4 text-center">
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
        </div>
    )
}

export default Contact