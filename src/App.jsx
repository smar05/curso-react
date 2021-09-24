import React, { Fragment } from "react";

import "./App.css";
import PrimerComponente from "./components/PrimerComponente.jsx";
import Props from "./components/Props.jsx";
import State from "./components/state.jsx";

function App() {
  return (
    <Fragment>
      <PrimerComponente />
      <Props nombre="Ricardo"></Props>
      <State></State>
    </Fragment>
  );
}

export default App;
