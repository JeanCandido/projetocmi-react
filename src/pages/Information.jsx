import { Helmet } from "react-helmet-async"

export default function Information() {
    return(
        <div className=" p-8 flex flex-col gap-8 text-zinc-700">
            <Helmet>
                <title>Informações - Cmi Engenharia</title>
                <meta
                    name='description'
                    content='Informações sobre os serviços que a cmi engenharia oferece.' 
                />
                <link rel="canonical" href="/informacoes" />
            </Helmet>
            <h1 className="text-2xl text-black font-bold">INFORMAÇÕES</h1>
            <h2 className=" text-2xl font-bold">Elevadores</h2>
            <p>Todo o nosso serviço é confeccionado com material de primeira qualidade, além de trabalharmos com equipamentos de última geração, garantindo aos nossos clientes maior qualidade em nossos serviços. Além da instalação, oferecemos manutenção dos equipamentos.</p>

            <h2 className=" text-1xl font-bold md:text-2xl">A CMI ENGENHARIA DISPONIBILIZA VÁRIOS ITENS PARA LOCAÇÃO E VENDA, ATENDENDO ÀS NECESSIDADES DE TODO TIPO DE OBRA:</h2>
            <ul className="list-disc pl-8">
                <li>Elevadores à Cabo, Cremalheira e Minigrua;</li>
                <li>Escoramento;</li>
                <li>Estrutura Tubular;</li>
                <li>Fachadeiros e Andaimes.</li>
            </ul>
            <h2 className=" text-1xl font-bold md:text-2xl">TEMOS AINDA UMA VASTA RELAÇÃO DE SERVIÇOS QUE OFERECEMOS, COM PROFISSIONAIS TREINADOS E CAPACITADOS:</h2>
            <ul className="list-disc pl-8">
                <li>Manutenção avulsa e mensal;</li>
                <li>Teste de freio com manutenção preventiva e corretiva;</li>
                <li>Emissão de RT de nosso Engenheiro Mecânico.</li>
            </ul>
            <h2 className=" text-1xl font-bold md:text-2xl">FAZEMOS TAMBÉM REFORMA DE ELEVADORES, CERTIFICADAS PELO NOSSO ENGENHEIRO MECÂNICO, COM REGISTRO NO CREA.</h2>
            <p>Como diferencial de mercado, oferecemos uma proposta de trabalho totalmente personalizada, de acordo com a necessidade de cada cliente. Em todos os casos, há opção por um plano de manutenção mensal, com um custo muito inferior ao padrão do mercado.</p>

            <p>Trabalhado dessa maneira, colocamos à disposição de nossos clientes toda liberdade e transparência para desenvolvermos o melhor plano de trabalho com o melhor custo de manutenção preventiva.</p>

            <p>Solicite um orçamento. Iremos até seu condomíno, empresa, residência ou indústria sem nenhum custo para avaliar seu equipamento e expor nossas alternativas para melhor atendê-lo.</p>

            <h2 className=" text-1xl font-bold md:text-2xl">Elétrica</h2>
            <ul className="list-disc pl-8">
                <li>Projetos Elétricos;</li>
                <li>Automação Industrial;</li>
                <li>Montagem de Painéis;</li>
                <li>Manutenção Preventiva e Corretiva;</li>
                <li>Contrato de Prestação de Serviços;</li>
                <li>Elétrica Industrial;</li>
                <li>Elétrica em Geral.</li>
            </ul>
        </div>
    )
}