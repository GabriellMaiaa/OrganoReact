import React from 'react'
import './Colaborador.css'

const Colaborador = () => {
  return (
    <div> {/*Vai ser dividido entre a parte da foto e a parte do nome e o cargo */}
      <div>
        <img src="https://github.com/GabriellMaiaa.png" alt="" />
      </div>
      <div>{/*Parte do nome e cargo */}
        <h4>Gabriel Maia</h4>
        <h5>Desenvolvedor FullStack</h5>
      </div>
    </div>
  )
}

export default Colaborador
