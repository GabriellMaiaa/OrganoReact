import React from 'react'
import './CampoTexto.css'


const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
    
    //let valor =''//Irei atribuir a var valor ao que for digitado
    
    const aoDigitar = (e) => {
      props.aoAlterado(e.target.value)
  }
  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input type="text" value={props.valor} onChange={aoDigitar} required ={props.obrigatorio} placeholder={placeholderModificada}/>
      {/*Esse Required mostra que o campo é obrigatório para poder ter o envio */}
    </div>
  )
}

export default CampoTexto
