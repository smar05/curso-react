import React, { Component } from "react";
import { Fragment } from "react";

class EstilosEnLinea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let age = 39;

    const titulo = {
      textAlign: "center",
      color: "green",
      backgroundColor: age <= 37 ? "blue" : "red",
    };

    return (
      <Fragment>
        <h1 style={titulo}>Hola</h1>
      </Fragment>
    );
  }
}

export default EstilosEnLinea;
