function Home() {
    return(
        <div>
            <section className="p-4">
                <div className=" max-w-9xl">
                    <h1 className=" font-bold text-3xl text-center">CMI - Engenharia Montagem Industrial - Empresas de      elevadores cremalheira</h1>
                    <p className=" text-justify">A <strong>CMI ENGENHARIA</strong> é uma empresa especializada em Engenharia de Acesso e Segurança, fornecendo equipamentos para a construção civil, para a montagem e manutenção industrial.</p>
                </div>
            </section>
            <section className=" bg-cmi-2">
                slider
            </section>
            <section className=" bg-[url('./imgs/imgs-bg/fundo-main.jpg')] bg-cover bg-no-repeat bg-center text-slate-50 h-64 flex items-center justify-center text-5xl">
                <h1 className=" font-black text-4xl">CMI ENGENHARIA</h1>
            </section>
            <section className=" bg-cmi-2 p-4">
                <div className=" max-w-9xl">
                    <h1 className=" font-bold text-2xl text-center">A CMI ENGENHARIA DISPONIBILIZA VÁRIOS ITENS PARA LOCAÇÃO E VENDA, ATENDENDO ÀS NECESSIDADES DE TODO TIPO DE OBRA</h1>
                    <p className=" text-justify">Trabalhado dessa maneira, colocamos à disposição de nossos clientes toda liberdade e transparência para desenvolvermos o melhor plano de trabalho com o melhor custo de manutenção preventiva.</p>
                </div>
            </section>
            <section className=" bg-[url('./imgs/imgs-bg/fundo-exp.jpg')] bg-cover bg-no-repeat bg-center text-slate-50 h-64 flex items-center justify-center text-5xl">
                <h1 className=" font-black text-center text-4xl">MAIS DE 13 ANOS DE EXPERIENCIA</h1>
            </section>
            <section>
                <div id="item-1">
                    <a href="#">
                        <img src="../imgs/imgs-group/elevador-01.jpeg" alt="" />
                        <p></p>
                    </a>
                </div>
                <div id="item-2"></div>
                <div id="item-3"></div>
                <div id="item-4"></div>
                <div id="item-5"></div>
                <div id="item-6"></div>
            </section>
        </div>
    )
}

export default Home