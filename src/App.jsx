import React, { Fragment } from "react";

import "./App.css";
import EstilosConStyle from "./components/EstilosConStyle";
//import EstilosModulo from "./components/EstilosModulos";
//import EstilosEnLinea from "./components/EstilosEnLinea";
//import EstilosTradicionales from "./components/EstilosTradicionales.jsx";
//import PrimerComponente from "./components/PrimerComponente.jsx";
//import Props from "./components/Props.jsx";
//import State from "./components/state.jsx";

function App() {
  return (
    <Fragment>
      {/*
      <PrimerComponente />
      <Props nombre="Ricardo" />
      <State />
      <EstilosTradicionales />
      
      <EstilosEnLinea />
      
      <EstilosModulo></EstilosModulo>
      */}
      <EstilosConStyle></EstilosConStyle>
    </Fragment>
  );
}

export default App;
