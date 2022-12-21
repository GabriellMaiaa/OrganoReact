import React from 'react'
import Colaborador from '../Colaborador/Colaborador'
import "./Time.css"

const Time = (props) => { //Vamos chamar por Props devido ao parâmetros dela que serão passados
  const estiloCorSecundaria = { backgroundColor: props.corSecundaria }
  const estiloBorda = {borderColor: props.corPrimaria}//A propriedade css tem que estar no nome padrão da linguagem. Ex: borderColor

  return (
    (props.colaboradores.length > 0) && // Condição para ser realizado a adição de colaboradores, pode ser assim ou com IF
    <section className='time' style={estiloCorSecundaria}>
        <h3 style={estiloBorda}>{props.nome}</h3>
        <div className="colaboradores">
        {props.colaboradores.map(colaborador => {
          return  <Colaborador corDeFundo = {props.corPrimaria} key={colaborador.nome} 
          nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.img}/>})}
        
        </div>
      </section>
    
  )
}

export default Time
