import React, { Fragment } from "react";

import "./App.css";
import PrimerComponente from "./components/PrimerComponente.jsx";
import Props from "./components/Props.jsx";

function App() {
  return (
    <Fragment>
      <PrimerComponente />
      <Props nombre="Ricardo"></Props>
    </Fragment>
  );
}

export default App;
