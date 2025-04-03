import { Helmet } from "react-helmet-async"

function Company() {
    return(
        <div className=" p-8 flex justify-center items-center sm:mb-56 xl:mb-64">
            <Helmet>
                <title>Empresa - Cmi Engenharia</title>
                <meta
                    name='description'
                    content='Com sede em Campinas, São Paulo, a CMI ENGENHARIA atua com criatividade e eficiência na produção, locação e venda de elevadores (a cabo, cremalheira e minigrua).' 
                />
                <link rel="canonical" href="/empresa" />
            </Helmet>
            <div className="max-w-9xl flex flex-col gap-8 text-zinc-700 lg:text-2xl">
                <h1 className="text-2xl lg:text-4xl text-black font-bold pl-4">EMPRESA</h1>
                <p>A <strong>CMI ENGENHARIA</strong> é uma empresa especializada em Engenharia de Acesso e Segurança, fornecendo equipamentos para a construção civil, para a montagem e manutenção industrial.</p>
                <p>A nossa empresa está atuando com criatividade e eficiência na produção, locação e venda de elevadores (a cabo, cremalheira e minigrua), escoramento, estrutura tubular, fachadeiros e andaimes.</p>
                <p>Atualmente, a <strong>CMI ENGENHARIA</strong> conta com equipes e colaboradores qualificados para atender com excelência as demandas de todas as regiões do Brasil. A empresa tem sua matriz em Campinas – São Paulo e com projetos para abertura de filias por todo Brasil.</p>
                <p>A prioridade da <strong>CMI ENGENHARIA</strong> é garantir a segurança do trabalhador, um alto padrão de qualidade de seus produtos e serviços obtendo assim a satisfação total de seus clientes. Entre em contato conosco e conheça nosso trabalho.</p>
            </div>
        </div>
    )
}

export default Company