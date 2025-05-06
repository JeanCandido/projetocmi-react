import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Slider from "../elements/Slider"

import { Link } from "react-router-dom"

import { Helmet } from 'react-helmet-async';

function Home() {
    useEffect(()=> {
        ScrollReveal().reveal('.element', {
            duration: 1000,
            distance: '100px',
            origin: 'bottom',
            easing: 'ease-in-out',
        })
    }, [])


    return(
        <>
        <Helmet>
            <title>Home - Cmi Engenharia</title>
            <meta
                name='description'
                content='Com sede em Campinas, São Paulo, a CMI ENGENHARIA atua com criatividade e eficiência na produção, locação e venda de elevadores (a cabo, cremalheira e minigrua).'
            />
            <meta
                name='keywords'
                content='Reforma elevador cremalheira, Venda elevador cremalheira, Alugar elevador cremmalheira, obras residenciais, obras comerciais, CMI, construção civil, engenharia civil'
            />
            <link rel="canonical" href="https://cmiengenharia.vercel.app/" />
        </Helmet>
        <div>
            <section className=" bg-[url('./imgs/imgs-bg/fundo-main.jpg')] bg-cover bg-no-repeat bg-center text-slate-50 h-64 flex items-center justify-center text-5xl">
                <h1 className=" element font-black text-3xl sm:text-4xl invisible">CMI ENGENHARIA</h1>
            </section>
            <section className="p-4 flex justify-center">
                <div className=" max-w-9xl">
                    <h1 className=" font-bold text-xl text-center sm:text-2xl lg:text-3xl">CMI - Engenharia Montagem Industrial - Empresas de      elevadores cremalheira</h1>
                    <p className=" text-justify text-sm sm:text-base lg:text-lg">A <strong>CMI ENGENHARIA</strong> é uma empresa especializada em Engenharia de Acesso e Segurança, fornecendo equipamentos para a construção civil, para a montagem e manutenção industrial.</p>
                </div>
            </section>
            <section className=" bg-cmi-1">
                <Slider />
            </section>
            <section className='flex p-2'>
                <div className=' w-full align-middle text-center pb-8 text-1xl font-bold pt-4'>
                    <h2 className='mb-8'>CONFIRA NOSSOS SERVIÇOS</h2>
                    <Link to="/servicos" className='bg-cmi-3 rounded-xl p-4'>SERVIÇOS</Link>
                </div>
                <div className=' w-full align-middle text-center pb-8 text-1xl font-bold pt-4'>
                    <h2 className='mb-8'>CONFIRA MAIS FOTOS E VIDEOS</h2>
                    <Link to="/galeria" className='bg-cmi-3 rounded-xl p-4'>GALERIA</Link>
                </div>
            </section>
            <section className="  p-4 flex justify-center items-center flex-col">
                
                <div className=" max-w-9xl">
                    <h1 className=" font-bold text-center sm:text-xl lg:text-2xl">A CMI ENGENHARIA DISPONIBILIZA VÁRIOS ITENS PARA ALUGUEL, LOCAÇÃO E VENDA, ATENDENDO ÀS NECESSIDADES DE TODO TIPO DE OBRA</h1>
                    <p className=" text-justify text-sm sm:text-base lg:text-lg">Trabalhado dessa maneira, colocamos à disposição de nossos clientes toda liberdade e transparência para desenvolvermos o melhor plano de trabalho com o melhor custo de manutenção preventiva.</p>
                </div>
            </section>
            <section className=" bg-[url('./imgs/imgs-bg/fundo-exp.jpg')] bg-cover bg-no-repeat bg-center text-slate-50 h-64 flex items-center justify-center text-5xl">
                <h1 className=" element font-black text-center text-3xl sm:text-4xl invisible">MAIS DE 13 ANOS DE EXPERIENCIA</h1>
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
        </>
    )
}

export default Home