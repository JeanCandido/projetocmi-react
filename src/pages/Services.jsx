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

export default function Services() {
    
    return(
        <div className=" flex justify-center w-full p-8">
            <div className=" flex flex-wrap justify-center max-w-960 flex-col gap-8">
                <h1 className="text-3xl text-black font-bold">SERVIÇOS</h1>
                <h2 className=" text-2xl font-bold text-zinc-700">Aluguel:</h2 >
                <section className=" flex justify-center flex-row flex-wrap">
                    <Service src={elevador_06} alt="ELEVADOR MINI GRUA" content="Contate-nos para aluguar"></Service>
                    <Service src={elevador_07} alt="ELEVADOR MINI GRUA" content="Contate-nos para aluguar"></Service>
                    <Service src={elevador_03} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para aluguar"></Service>
                    <Service src={elevador_11} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para alugar"></Service>
                    <Service src={elevador_08} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para alugar"></Service>
                    <Service src={elevador_14} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para alugar"></Service>


                </section>
                <h2 className=" text-2xl font-bold text-zinc-700">Reforma:</h2 >
                    <section className=" flex justify-center flex-row flex-wrap">
                        <Service src={elevador_01} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para locar"></Service>
                        <Service src={elevador_02} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para locar"></Service>
                        <Service src={elevador_09} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para locar"></Service>
                        <Service src={elevador_13} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para locar"></Service>
                        <Service src={elevador_10} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para locar"></Service>
                        <Service src={elevador_12} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para locar"></Service>

                    </section>
                <h2 className=" text-2xl font-bold text-zinc-700">Vendas:</h2 >
                <section className=" flex justify-center flex-row flex-wrap">
                    <Service src={elevador_01} alt="ELEVADOR CREMALHEIRA" content="Contate-nos para Contratar"></Service>
                    <Service src={elevador_04} alt="MANUTENÇÃO MINI GRUA" content="Contate-nos para contratar"></Service>
                </section>
            </div>
        </div>
    )
}