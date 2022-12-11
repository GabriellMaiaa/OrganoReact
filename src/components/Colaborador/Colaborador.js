import React from 'react'
import './Colaborador.css'

const Colaborador = (props) => {
  return (
    <div className='colaborador'> {/*Vai ser dividido entre a parte da foto e a parte do nome e o cargo */}
      <div className='cabecalho'>
        <img src={props.img} alt={props.nome} />
      </div>
      <div className='rodape'>{/*Parte do nome e cargo */}
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador
