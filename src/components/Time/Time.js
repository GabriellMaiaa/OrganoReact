import React from 'react'
import Colaborador from '../Colaborador/Colaborador'
import "./Time.css"

const Time = (props) => { //Vamos chamar por Props devido ao parâmetros dela que serão passados
  const estiloCorSecundaria = { backgroundColor: props.corSecundaria }
  const estiloBorda = {borderColor: props.corPrimaria}//A propriedade css tem que estar no nome padrão da linguagem. Ex: borderColor

  return (
    <div>
    {/** Condição para ser realizado a adição de colaboradores, pode ser assim ou com IF */}
    <section className='time' style={estiloCorSecundaria}>
        <h3 style={estiloBorda}>{props.nome}</h3>
        <div className="colaboradores">
        {props.colaboradores.map(colaborador => {
         
         console.log(<Colaborador corDeFundo = {props.corPrimaria} key={colaborador.nome} 
          nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.img} />)
            return <Colaborador corDeFundo = {props.corPrimaria} key={colaborador.nome} 
          nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.img} aoDeletar={props.aoDeletar} />
          })}
        
        </div>
      </section>
      </div>
    
  )
}

export default Time