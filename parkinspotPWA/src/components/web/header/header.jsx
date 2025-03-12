import React from 'react'
import { motion } from 'framer-motion'
import './header.css'

export default function Header() {
  const scrollToSection = (id) => () => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div 
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className='titulo-header'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Parkin Spot
      </motion.h2>
      <nav className='navegador'>
        <motion.a 
          className='linkScroll' 
          onClick={scrollToSection('que-es')}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          ¿Que es?
        </motion.a>
        <motion.a 
          className='linkScroll' 
          onClick={scrollToSection('problematica-necesidad')}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          Problematica y Necesidad
        </motion.a>
        <motion.a 
          className='linkScroll' 
          onClick={scrollToSection('descarga')}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          Descarga
        </motion.a>
      </nav>
    </motion.div>
  )
}