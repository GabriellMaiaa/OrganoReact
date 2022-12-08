import React, { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import "./Formulario.css"
import { useState } from 'react'

const Formulario = () => {
   
   const times = [ //Esse Array vai ser usado como valor para a nossa PROPS Itenss
    'Programação',
    'Front-End',
    'Data-Science',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
   ]

const [nome, setNome] = useState('') // Tem que ter uma Alteração de estado para cada uma OPÇÃO
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Foi enviadooo', nome, cargo, imagem)
}

    return (
        <div>
            <section className='form'>
                <form onSubmit= {aoSalvar}>
                    <h2>Preencha os dados para o informar o Card do Colaborador</h2>
                    <CampoTexto 
                    label="Nome" 
                    obrigatorio ={true} 
                    placeholder='Digite seu nome' 
                    value = {nome}// Pode ser feito desta forma, ou da outra criando um componente para cada texto deixando o state dentro do componente
                    aoAlterado ={valor => setNome(valor)}
                    /> {/**Para importar automatico use o Control + space em cima do componente */}
                    
                    <CampoTexto 
                    label="Cargo" 
                    placeholder='Digite seu cargo' 
                    value = {cargo}
                    aoAlterado ={valor => setCargo(valor)}
                    />
                    
                    <CampoTexto 
                    label="Imagem" 
                    placeholder='Digite o indereço da imagem'
                    value = {imagem}
                    aoAlterado ={valor => setImagem(valor)} 
                    />
                    {/**Abaixo vai ser passado a Lista Suspensa com as Props */}
                    <ListaSuspensa label="Time" obrigatorio ={true} itens={times}/>
                    {/*Informações do Botão */}
                    <Botao>{/*Exemplo de Children Props */}
                        Criar Card
                    </Botao>
                </form>
            </section>
        </div>
    )
}

export default Formulario
