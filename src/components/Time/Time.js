import React from 'react'
import Colaborador from '../Colaborador/Colaborador'
import "./Time.css"

const Time = (props) => { //Vamos chamar por Props devido ao parâmetros dela que serão passados
  const estiloCorSecundaria = { backgroundColor: props.corSecundaria }
  const estiloBorda = {borderColor: props.corPrimaria}//A propriedade css tem que estar no nome padrão da linguagem. Ex: borderColor

  return (
    <div>
      <section className='time' style={estiloCorSecundaria}>
        <h3 style={estiloBorda}>{props.nome}</h3>
        <Colaborador/>
      </section>
    </div>
  )
}

export default Time
