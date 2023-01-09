import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BaseColaboradores } from './Datos/BaseColaboradores.js'
import Formulario from "./Componentes/Formulario.jsx";
import ListaColaboradores from "./Componentes/ListaColaboradores.jsx";
import Header from "./Componentes/Header.jsx";


function App() {

  const [LstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [valorDeLaCaja, setValorDeLaCaja] = useState('');

  return (
    <div className="App">
    <Header 
      setValorDeLaCaja={setValorDeLaCaja}
     ></Header>
     <Formulario
     LstColaboradores={LstColaboradores}
     setLstColaboradores={setLstColaboradores}
     ></Formulario>
     <ListaColaboradores 
      LstColaboradores={LstColaboradores}
      valorDeLaCaja={valorDeLaCaja}>
      </ListaColaboradores>
    </div>
  );
}

export default App;
