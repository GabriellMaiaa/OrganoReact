import React from 'react'
import "./Time.css"

const Time = (props) => { //Vamos chamar por Props devido ao parâmetros dela que serão passados
  return (
    <div>
      <section>
        <h3>{props.nome}</h3>
      </section>
    </div>
  )
}

export default Time
