import React from 'react'
import Header from '../components/web/header/header'
import { Bienvenida } from '../components/web/bienvenida/bienvenida'
import QueEs from '../components/web/queEs/queEs'

function WebContent() {
  return (
    <div>
      <Header />
      <Bienvenida />
      <QueEs />
      <h1>Contenido web</h1>
    </div>
  )
}

export default WebContent