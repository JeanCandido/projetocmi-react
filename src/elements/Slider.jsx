import { useState, useEffect, useRef } from "react"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import elevador_01 from '../imgs/imgs-group/elevador-01.jpeg'
import elevador_02 from '../imgs/imgs-group/elevador-02.jpeg'
import elevador_03 from '../imgs/imgs-group/elevador-03.jpeg'
import elevador_05 from '../imgs/imgs-group/elevador-05.jpeg'

const images = [elevador_01, elevador_02,elevador_03,elevador_05]

function Slider() {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
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
                    {images.map(image => (
                        <motion.div className=" min-h-52 min-w-64 max-w-5xl p-3.5 flex justify-center items-center" image={image}>
                            <Link to="/servicos"><img src={image} alt="Texto alt" className=" w-full h-5/6 rounded-xl shadow-sm" /></Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider 