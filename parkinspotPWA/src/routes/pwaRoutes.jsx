import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePWA from '../pages/pwa/homePWA'
import AboutUsPWA from '../pages/pwa/aboutUsPWA'

const PWARoutes = () => (
  <Routes>
    <Route path="/" element={<HomePWA />} />
    <Route path="/about" element={<AboutUsPWA />} />
    {/* Añade más rutas específicas para la versión PWA */}
  </Routes>
)

export default PWARoutes