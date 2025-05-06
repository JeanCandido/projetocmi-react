import Service from "../elements/Service";

import elevador_01 from "../imgs/imgs-group/elevador-01.jpeg";
import elevador_02 from "../imgs/imgs-group/elevador-02.jpeg";
import elevador_03 from "../imgs/imgs-group/elevador-03.jpeg";
import elevador_04 from "../imgs/imgs-group/elevador-05.jpeg";
import elevador_06 from "../imgs/imgs-group/elevador-06.jpeg";
import elevador_07 from "../imgs/imgs-group/elevador-07.jpeg";
import elevador_08 from '../imgs/gallery/img-22.jpeg';
import elevador_09 from '../imgs/gallery/img-23.jpeg';
import elevador_10 from '../imgs/gallery/img-24.jpeg';
import elevador_11 from '../imgs/gallery/img-25.jpeg';
import elevador_12 from '../imgs/gallery/img-30.jpeg';
import elevador_13 from '../imgs/gallery/img-33.jpeg';
import elevador_14 from '../imgs/gallery/img-34.jpeg';

import { Helmet } from "react-helmet-async";

export default function Services() {
    
    return(
        <div className=" flex justify-center w-full p-8">
            <Helmet>
                <title>Serviços - Cmi Engenharia</title>
                <meta
                    name='description'
                    content='A CMI oferece serviços de aluguel, reforma e venda de elevadores(a cabo, cremalheira e mini grua).' 
                />
                <link rel="canonical" href="https://cmiengenharia.com.br/servicos" />
            </Helmet>
            <div className=" flex flex-wrap justify-center max-w-960 flex-col gap-8">
                <h1 className="text-3xl text-black font-bold">SERVIÇOS</h1>
                <h2 className=" text-2xl font-bold text-zinc-700">Aluguel:</h2 >
                <h3 className="text-xl font-bold text-zinc-700">FAÇA O ALUGUEL DE ELEVADOR CREMALHEIRA NA CMI!</h3>
                <p className=" font-bold text-zinc-700">A CMI Engenharia e Montagem Industrial disponibiliza o serviço de aluguel de elevador cremalheira para obras civis e industriais. O aluguel de elevador cremalheira é um serviço que atende às necessidades e demandas de obras de construtoras que dispensam a compra do equipamento.</p>
                <p className=" font-bold text-zinc-700">O aluguel de elevador cremalheira permite um investimento econômico para quem precisa desse equipamento, garante segurança para a equipe de trabalhadores e qualidade operacional para a realização do projeto com toda mobilidade e rapidez.</p>
                <p className=" font-bold text-zinc-700">O elevador cremalheira é um equipamento que utiliza um sistema dotado de um pinhão e uma cremalheira. Este sistema é acionado através do motofreio de velocidade, que trabalha para elevar a cabine. O aluguel de elevador cremalheira permite uma notável economia nas obras, e pode ser usado para fins industriais, comerciais e outros.</p>
                <section className=" flex justify-center flex-row flex-wrap">
                    <Service src={elevador_06} alt="MINI GRUA" content1="Contate-nos para alugar"></Service>
                    <Service src={elevador_07} alt="MINI GRUA" content1="Contate-nos para alugar"></Service>
                    <Service src={elevador_03} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para alugar"></Service>
                    <Service src={elevador_11} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para alugar"></Service>
                    <Service src={elevador_08} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para alugar"></Service>
                    <Service src={elevador_14} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para alugar"></Service>


                </section>
                <h2 className=" text-2xl font-bold text-zinc-700">Reforma:</h2 >
                <h3 className="text-xl font-bold text-zinc-700">SAIBA TODAS AS INFORMAÇÕES SOBRE A REFORMA DE ELEVADORES CREMALHEIRA</h3>
                <p className=" font-bold text-zinc-700">O elevador cremalheira, também conhecido como elevador para obra, é uma estrutura especificamente projetada para transportar profissionais ou materiais até o ponto mais elevado de uma construção. Mas, para que esse equipamento execute sua função de forma rápida e segura, é imprescindível procurar uma empresa que ofereça a reforma de elevadores cremalheira.</p>
                <p className=" font-bold text-zinc-700">Esse serviço consiste em verificar se o equipamento está funcionando da forma correta, impedindo, assim, que um possível erro ou falha venha a acontecer e acabe prejudicando ou atrasando a realização de uma obra. Além disso, a reforma de elevadores cremalheira também é útil para conservar o equipamento, fazendo com que ele dure muito mais tempo, o que é ótimo para os consumidores.</p>
                <h3 className=" text-xl font-bold text-zinc-700">DE QUANTO EM QUANTO TEMPO DEVO PROCURAR ESSE SERVIÇO?</h3>
                <p className=" font-bold text-zinc-700">Não existe um tempo predeterminado, mas é recomendado que o consumidor procure regularmente o serviço de reforma de elevadores cremalheira. Para se ter uma ideia, hoje em dia, já existem corporações que oferecem planos mensais aos seus consumidores, assim como a CMI Engenharia.</p>
                <p className=" font-bold text-zinc-700">Essa corporação é especializada nesse tipo de trabalho e conta uma equipe qualificada, formada e com registro no CREA. Também é importante pontuar que essa empresa é referência quando o assunto é custo baixo e alta qualidade.</p>
                <section className=" flex justify-center flex-row flex-wrap">
                    <Service src={elevador_01} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para Reformar"></Service>
                    <Service src={elevador_02} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para Reformar"></Service>
                    <Service src={elevador_09} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para Reformar"></Service>
                    <Service src={elevador_12} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para Reformar"></Service>

                </section>
                <h2 className=" text-2xl font-bold text-zinc-700">Vendas:</h2 >
                <h3 className="text-xl font-bold text-zinc-700">COMPRE ELEVADORES CREMALHEIRA COM A CMI!</h3>
                <p className=" font-bold text-zinc-700">Diferentes corporações realizam a venda de elevadores cremalheira, mas existe uma em especial que oferta o melhor custo-benefício aos seus consumidores, a CMI Engenharia. Essa empresa é experiente e acumula clientes em diferentes locais e de diversos ramos de atuação, como incorporadoras, panificadoras, supermercados e até universidades públicas.</p>
                <p className=" font-bold text-zinc-700">Se você ficou interessado e quer conhecer melhor esse produto, não deixe de contatar a CMI Engenharia. Ela atende os seus consumidores de diferentes formas. É possível entrar em contato através do site oficial, do e-mail ou por meio do telefone da empresa.</p>
                <section className=" flex justify-center flex-row flex-wrap">
                    <Service src={elevador_01} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para Contratar"></Service>
                    <Service src={elevador_04} alt="MANUTENÇÃO MINI GRUA" content1="Contate-nos para Contratar"></Service>
                    <Service src={elevador_13} alt="ELEVADOR CREMALHEIRA" content1="Contate-nos para Contratar"></Service>
                </section>
            </div>
        </div>
    )
}