
import { useState } from 'react';
import Banner from './components/Banner/Banner';
//import CampoTexto from './components/CampoTexto/CampoTexto';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';

function App() {
  const times =[ //Criar esse array para auxiliar nas cores diferentes da caixa de cada um
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9'
    },
    {
      nome:   'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:   'Data-Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:    'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:    'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:   'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    },

  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {//Essa função fica dentro de outra
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App"> 
      <Banner/>
      
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>{/*Função vai ser chamada no formulário */}
      {times.map(time => <Time 
      key={time.nome} 
      nome= {time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria = {time.corSecundaria}
      colaboradores ={colaboradores}
      />)} {/*Sempre por a Key que serve para renderizar */}
    
    </div>
  );
}

export default App;
