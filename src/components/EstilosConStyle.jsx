import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import "./variables.css";

class EstilosConStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const fondoTexto = {
      color: "green",
    };

    const animaTexto = keyframes`
      from{
          color:green;
      }
      to{
          color:red
      }
      
    `;

    const Titulo = styled.h1`
      color: green;
      font-size: 39px;
      background-color:{fondoTexto.color};

      &:hover{
          color:blue;
      }

      @media(min-width:800px){
          color:transparent;
      }

      animation:${animaTexto} 1s linear infinite;
    
    `;

    const Cabecera = styled.header`
      height: var(--altoHeader);
      background-color: var(--colorHeader);
      width: var(--anchoHeader);
    `;

    return (
      <Fragment>
        <Cabecera>
          <Titulo>Estamos en Styled component</Titulo>
        </Cabecera>
      </Fragment>
    );
  }
}

export default EstilosConStyle;
