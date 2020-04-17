import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Plaquia - Revestimientos antihumedad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Cantidades necesarias:</h4>
        <p>Superficie a cubrir: {props.Datos.superficie} m²</p>
        <p>Cajas de Plaquia necesarias: {props.Datos.cantCajas}</p>
        <p>Baldes de pegamento: {props.Datos.cantBaldes}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Volver</Button>
      </Modal.Footer>
    </Modal>
  );
}
