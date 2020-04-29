import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

var Titulo;
var Cantidades;
var Sup;
var Cajas;
var Baldes;
var Boton;

export default function MyVerticallyCenteredModal(props) {
  if (props.Idioma === "Por") {
    Titulo = "Plaquia - Placas antihumidade";
    Cantidades = "Quantidades necessárias:";
    Sup = "Superfície a ser coberta:";
    Cajas = "Caixas de Plaquia necessárias:";
    Baldes = "Baldes de cola:";
    Boton = "Retornar";
  } else if (props.Idioma === "Eng") {
    Titulo = "Plaquia - Antihumidity boards";
    Cantidades = "Quantities required:";
    Sup = "Surface to be covered:";
    Cajas = "Plaquia boxes required:";
    Baldes = "Glue buckets:";
    Boton = "Return";
  } else {
    Titulo = "Plaquia - Revestimientos antihumedad";
    Cantidades = "Cantidades necesarias:";
    Sup = "Superficie a cubrir:";
    Cajas = "Cajas de Plaquia necesarias:";
    Baldes = "Baldes de pegamento:";
    Boton = "Volver";
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{Titulo} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{Cantidades}</h4>
        <p>
          {Sup} {props.Datos.superficie} m²
        </p>
        <p>
          {Cajas} {props.Datos.cantCajas}
        </p>
        <p>
          {Baldes} {props.Datos.cantBaldes}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{Boton}</Button>
      </Modal.Footer>
    </Modal>
  );
}
