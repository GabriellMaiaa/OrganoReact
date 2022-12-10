
import { useState } from 'react';
import Banner from './components/Banner/Banner';
//import CampoTexto from './components/CampoTexto/CampoTexto';
import Formulario from './components/Formulario/Formulario';

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
    </div>
  );
}

export default App;
