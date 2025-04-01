import { useState, useEffect, useRef } from "react"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import elevador_01 from '../imgs/imgs-group/elevador-01.jpeg'
import elevador_02 from '../imgs/imgs-group/elevador-02.jpeg'
import elevador_03 from '../imgs/imgs-group/elevador-03.jpeg'
import elevador_05 from '../imgs/imgs-group/elevador-05.jpeg'

const slides = [
    { image: elevador_01, text: "Aluguel de elvador mini grua" },
    { image: elevador_02, text: "Aluguel de elevador mini grua" },
    { image: elevador_03, text: "Aluguel de elevador cremalheira" },
    { image: elevador_05, text: "Manutenção de elevadores" }
]

const images = [elevador_01, elevador_02,elevador_03,elevador_05]

function Slider() {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    })

    return(
        <div>
            <motion.div ref={carousel} className=" cursor-grab p-8 overflow-hidden" whileTap={{ cursor: "grabbing" }}>
                <motion.div 
                    className=" flex items-center"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 200}}
                    animate={{ x: 0}}
                    transition={{ duration: 1.2}}
                >
                    {slides.map((slide, index) => (
                        <motion.div key={index} className=" min-h-52 min-w-64 max-w-5xl p-3.5 flex justify-center items-center">
                            <div>
                                <Link to="/servicos">
                                    <img src={slide.image} alt="Texto alt" className="w-full h-5/6 rounded-tr-xl rounded-tl-xl shadow-sm" />
                                </Link>
                                <p className=" bg-cmi-3 rounded-br-xl rounded-bl-xl p-4 text-center">{slide.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider 