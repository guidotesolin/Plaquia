import React, { useState } from "react";

import Calculadora from "./Calculadora";
import Modal from "./LanzarModal";

var Ejemplo = new Object();

function CalculadoraPlaquia(props) {
  Ejemplo.superficie = 4;
  Ejemplo.cantCajas = 2;
  Ejemplo.cantBaldes = 3;
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
          <Modal Datos={Ejemplo} />
        </div>
      );
  }
}

export default CalculadoraPlaquia;
