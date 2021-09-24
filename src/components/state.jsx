import React, { Component, Fragment } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ricardo",
      apellido: "Mantilla",
    };
  }

  cambiarDatos() {
    this.state.name === "Ricardo" && this.state.apellido === "Mantilla"
      ? this.setState({ name: "Andres", apellido: "Sanchez" })
      : this.setState({ name: "Ricardo", apellido: "Mantilla" });
  }

  render() {
    return (
      <Fragment>
        <h1>State</h1>
        <h2>
          Mi nombre es {this.state.name} {this.state.apellido}
        </h2>
        <button onClick={this.cambiarDatos.bind(this)}>Pulsar</button>
      </Fragment>
    );
  }
}

export default State;
