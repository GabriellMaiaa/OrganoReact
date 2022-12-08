import React from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import "./Formulario.css"

const Formulario = () => {
   
   const times = [ //Esse Array vai ser usado como valor para a nossa PROPS Itenss
    'Programação',
    'Front-End',
    'Data-Science',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
   ]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Foi enviadooo')
}

    return (
        <div>
            <section className='form'>
                <form onSubmit= {aoSalvar}>
                    <h2>Preencha os dados para o informar o Card do Colaborador</h2>
                    <CampoTexto label="Nome" obrigatorio ={true} placeholder='Digite seu nome' /> {/**Para importar automatico use o Control + space em cima do componente */}
                    <CampoTexto label="Cargo" placeholder='Digite seu cargo' />
                    <CampoTexto label="Imagem" placeholder='Digite o indereço da imagem' />
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
