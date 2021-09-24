import React, { Fragment, Component } from "react";

class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h1>Mi nombre es {this.props.nombre}</h1>
      </Fragment>
    );
  }
}

export default Props;
