import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./EstilosModulo.module.css";

class EstilosModulo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h1 className={styles.titulo}>Hola</h1>
      </Fragment>
    );
  }
}

export default EstilosModulo;
