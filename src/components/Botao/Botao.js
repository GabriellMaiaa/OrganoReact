import React from 'react'
import "./Botao.css"

const Botao = (props) => {
  return (
    <div>
      <button className='botao'>
        {props.children} {/*Aqui é passado o valor da Children que foi posta na passagem de componente */}
      </button>
    </div>
  )
}

export default Botao
