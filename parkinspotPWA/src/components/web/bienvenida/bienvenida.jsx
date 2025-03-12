import React from 'react'
import './bienvenida.css'
import { motion } from 'framer-motion'

export const Bienvenida = () => {
  return (
    <motion.div 
      className='bienvenida'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className='imagen-bienvenida'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.h1 
        className='titulo-bienvenida'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a:
      </motion.h1>
      <motion.h1 
        className='titulo-app'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1, color: '#FFD700', borderColor: '#FFD700', transition: { duration: 0.5 } }}
      >
        ResiPark
      </motion.h1>
    </motion.div>
  )
}