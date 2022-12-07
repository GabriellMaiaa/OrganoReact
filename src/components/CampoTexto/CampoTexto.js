import React from 'react'
import './CampoTexto.css'

const CampoTexto = () => {
  return (
    <div className='campo-texto'>
      <h1>Preencha os Dados no card para ajudar o Colaborador: </h1>
      <label>Nome  </label>
      <input type="text" placeholder='Digite seu nome'/>
    </div>
  )
}

export default CampoTexto
