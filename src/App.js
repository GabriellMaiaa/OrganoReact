
import { useState } from 'react';
import Banner from './components/Banner/Banner';
//import CampoTexto from './components/CampoTexto/CampoTexto';
import Formulario from './components/Formulario/Formulario';
import Time from './components/Time/Time';

function App() {
  const [colaboradores, setColaboradores] = useState('')

  const aoNovoColaboradorAdicionado = (colaborador) => {//Essa função fica dentro de outra
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App"> 
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>{/*Função vai ser chamada no formulário */}
      <Time nome='Programação'/>
      <Time nome='Front-End'/>
      <Time nome='Data Science'/>
    </div>
  );
}

export default App;
