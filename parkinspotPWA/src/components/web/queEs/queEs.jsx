import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './queEs.css'

export default function QueEs() {

  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activará solo una vez
    threshold: 0.1, // El porcentaje del componente visible para activar la animación
  })

  return (
    <motion.div 
      className='que-es'
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <motion.div 
        className='ContenedorTexto'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2>¿Que es?</h2>
        <p>ResiPark es una PWA (Progres Web App), para poder ser un aporte a la organizacion, el buen convivir y la convivencia entre los residentes, visitas, porteros y servicios de emergencia.</p>
      </motion.div>
      <div 
        className='ContenedorImagen'
      >
        <motion.img className='carontop'
                initial={{ x: 1000, opacity: 0, rotate: 0 }}
                animate={{ x: inView ? 0 : 1000, opacity: inView ? 1 : 0, rotate: inView ? 430 : 0 }}
                transition={{ duration: 2.5 }} 
                src='./img/carontop.png'/>
        <motion.img/>
      </div>
    </motion.div>
  )
}