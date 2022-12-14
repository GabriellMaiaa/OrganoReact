import React, { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import "./Formulario.css"


const Formulario = (props) => {
   


const [nome, setNome] = useState('') // Tem que ter uma Alteração de estado para cada uma OPÇÃO
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado ({ //Função que foi chamada no APP.js para retornar a resposta do cadastro em objeto
        nome:nome,
        imagem:imagem,
        cargo:cargo,
        time:time
    })
    setNome('') //Se faz isso para poder limpar os campos após um reset na pág
    setCargo('')
    setImagem('')
    setTime('')
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
                    placeholder='Digite o endereço da imagem'
                    value = {imagem}
                    aoAlterado ={valor => setImagem(valor)} 
                    />
                    {/**Abaixo vai ser passado a Lista Suspensa com as Props */}
                    <ListaSuspensa 
                    label="Time" 
                    obrigatorio ={true} 
                    itens={props.times}
                    value = {time}
                    aoAlterado = {valor =>setTime(valor)}
                    />
                    
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
