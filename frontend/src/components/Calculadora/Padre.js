import React from "react";

import Calculadora from "./Calculadora";

function CalculadoraPlaquia(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <Calculadora Idioma="Por" />
        </div>
      );
    case "Eng":
      return (
        <div>
          <Calculadora Idioma="Eng" />
        </div>
      );
    default:
      return (
        <div>
          <Calculadora />
        </div>
      );
  }
}

export default CalculadoraPlaquia;
