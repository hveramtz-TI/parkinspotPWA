import React, { useState } from 'react'
import './header.css'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  const scrollToSection = (id) => () => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  return (
    <div className="header">
      <h2 className='titulo-header'>Parkin Spot</h2>
      <nav className='navegador'>
        <a className='linkScroll' onClick={scrollToSection('que-es')} >¿Que es?</a>
        <a className='linkScroll' onClick={scrollToSection('problematica-necesidad')} >Problematica y Necesidad</a>
        <a className='linkScroll' onClick={scrollToSection('descarga')} >Descarga</a>
      </nav>
    </div>
  )
}