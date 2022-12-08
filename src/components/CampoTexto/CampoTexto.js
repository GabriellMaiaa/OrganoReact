import React from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input type="text" required ={props.obrigatorio} placeholder={placeholderModificada}/>
      {/*Esse Required mostra que o campo é obrigatório para poder ter o envio */}
    </div>
  )
}

export default CampoTexto
