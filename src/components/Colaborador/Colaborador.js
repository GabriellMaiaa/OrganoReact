import React from 'react'
import './Colaborador.css'

const Colaborador = ({nome,img,cargo, corDeFundo, aoDeletar}) => {
  return (
    <div className='colaborador'> {/*Vai ser dividido entre a parte da foto e a parte do nome e o cargo */}
    <div className='deletar' onClick={aoDeletar}>deletar</div>
      <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
        <img src='https://github.com/GabriellMaiaa.png' alt={nome} />
      </div>
      <div className='rodape'>{/*Parte do nome e cargo */}
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador
