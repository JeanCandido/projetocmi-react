import ClientsImgs from "../elements/ClientsImgs";
import superZinco from "../imgs/imgs-clients/clientes-01.jpg"
import AMZ from "../imgs/imgs-clients/clientes-02.jpg"
import villaramos from "../imgs/imgs-clients/clientes-03.jpg"
import Unicamp from "../imgs/imgs-clients/clientes-04.jpg"
import Cortiz from "../imgs/imgs-clients/clientes-05.jpg"
import Globe from "../imgs/imgs-clients/clientes-06.jpg"
import Aurocan from "../imgs/imgs-clients/clientes-07.jpg"
import BCS from "../imgs/imgs-clients/clientes-08.jpg"
import MP from "../imgs/imgs-clients/clientes-09.jpg"
import Massotti from "../imgs/imgs-clients/clientes-10.jpg"
import Faz from "../imgs/imgs-clients/clientes-11.jpg"
import MHN from "../imgs/imgs-clients/clientes-12.jpg"
import Pedro from "../imgs/imgs-clients/clientes-13.jpg"
import Wizard from "../imgs/imgs-clients/clientes-14.jpg"
import Jambeiro from "../imgs/imgs-clients/clientes-15.jpg"
import Congesa from "../imgs/imgs-clients/clientes-16.jpg"
import Neto from "../imgs/imgs-clients/clientes-17.jpg"
import SEGA from "../imgs/imgs-clients/clientes-18.jpg"
import Tropical from "../imgs/imgs-clients/clientes-19.jpg"

import { Helmet } from "react-helmet-async";

export default function Client() {
    
    return(
        <div className=" flex flex-col items-center justify-center">
            <Helmet>
                <title>Clientes - Cmi Engenharia</title>
                <meta
                    name='description'
                    content='Conheça os parceiros e clientes da Cmi Engenharia.' 
                />
                <link rel="canonical" href="https://cmiengenharia.com.br/clientes" />
            </Helmet>
            <div className=" max-w-12xl">
                <h1 className=" text-3xl font-bold ml-3">CLIENTES</h1>
                <p className=" text-xl font-bold ml-3">Conheça nosso clientes</p>
                <div className=" flex flex-col items-center justify-center">
                    <div className=" flex flex-wrap max-w-12xl items-center justify-center gap-4">
                        <ClientsImgs src={superZinco} alt="Super Zinco"/>
                        <ClientsImgs src={AMZ} alt="Amz"/>
                        <ClientsImgs src={villaramos} alt="villaramos"/>
                        <ClientsImgs src={Unicamp} alt="Unicamp"/>
                        <ClientsImgs src={Cortiz} alt="Cortiz Imóveis"/>
                        <ClientsImgs src={Globe} alt="Globe Química"/>
                        <ClientsImgs src={Aurocan} alt="Supermercado Aurocan"/>
                        <ClientsImgs src={BCS} alt="BCS"/>
                        <ClientsImgs src={MP} alt="MP - Matéria Prima"/>
                        <ClientsImgs src={Massotti} alt="Massotti"/>
                        <ClientsImgs src={Faz} alt="Faz Engenharia"/>
                        <ClientsImgs src={MHN} alt="MHN"/>
                        <ClientsImgs src={Pedro} alt="Colégio Pedro Rafael"/>
                        <ClientsImgs src={Wizard} alt="Wizard"/>
                        <ClientsImgs src={Jambeiro} alt="Panificadora Jambeiro"/>
                        <ClientsImgs src={Congesa} alt="Congesa"/>
                        <ClientsImgs src={Neto} alt="H.Neto Construtora"/>
                        <ClientsImgs src={SEGA} alt="Construtora SEGA"/>
                        <ClientsImgs src={Tropical} alt="Tropical Incorporações"/>
                    </div>
                </div>
            </div>
        </div>
    )
}