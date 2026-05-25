import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalContainer from "./Estilos/estiloGlobal";
import Cabecalho from "./componentes/Cabecalho";
import Menu from "./componentes/Menu";
import Inicio from "./componentes/Inicio";
import Estoque from "./componentes/Estoque";


function App() {

  return (
    <BrowserRouter>
      

        <Cabecalho />
        <Menu />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/estoque' element={<Estoque />} />
        </Routes>

      <GlobalContainer/>

    </BrowserRouter>
  )
}

export default App;