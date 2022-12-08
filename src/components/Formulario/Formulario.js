import React from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import "./Formulario.css"

const Formulario = () => {
    return (
        <div>
            <section className='form'>
                <form>
                    <h2>Preencha os dados para o informar o Card do Colaborador</h2>
                    <CampoTexto label="Nome" placeholder='Digite seu nome' /> {/**Para importar automatico use o Control + space em cima do componente */}
                    <CampoTexto label="Cargo" placeholder='Digite seu cargo' />
                    <CampoTexto label="Imagem" placeholder='Digite o indereço da imagem' />
                </form>
            </section>
        </div>
    )
}

export default Formulario
