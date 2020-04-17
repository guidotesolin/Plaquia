import React, { useState } from "react";

import Calculadora from "./Calculadora";

function CalculadoraPlaquia(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>Calculadora en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>Calculadora en ingles</p>
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
