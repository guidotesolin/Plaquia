import React from "react";

import "./Contacto.css";
import Formulario from "./Formulario";

function Contacto(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>
            Envie-nos um e-mail para <strong>contacto@plaquia.com.ar</strong>,
            ou entre em contato conosco através do formulário abaixo.
          </p>
          <Formulario Idioma={props.Idioma} />
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>
            Send us an email to <strong>contacto@plaquia.com.ar</strong>, or
            contact us using the form below.
          </p>
          <Formulario Idioma={props.Idioma} />
        </div>
      );
    default:
      return (
        <div>
          <p>
            Envienos un mail a <strong>contacto@plaquia.com.ar</strong>, o
            contactese mediante el siguiente formulario.
          </p>
          <Formulario Idioma={props.Idioma} />
        </div>
      );
  }
}

export default Contacto;
