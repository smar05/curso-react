import React, { Fragment, Component } from "react";

class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h1>Props</h1>
        <h2>Mi nombre es {this.props.nombre}</h2>
      </Fragment>
    );
  }
}

export default Props;
