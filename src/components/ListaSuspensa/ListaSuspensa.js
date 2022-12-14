import React from 'react'
import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    //Nós iremos ter como props = Itens e a label
    return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select onChange={e =>props.aoAlterado(e.target.value)} required = {props.obrigatorio} value={props.valor}>{/**Quero retornar os valores com o MAP */} {/*NÃO ESQUECA DA CHAVE KEY */}
       <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)} {/*Aqui eu quero retornar os valores que serão passados como props */}
      </select>{/*O MAP se utiliza para tudo que você deseja retornar em Props */}
    </div>
  )
}

export default ListaSuspensa
