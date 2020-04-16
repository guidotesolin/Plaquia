import React from "react";

import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./Modal";

export default function ModalPlaquia(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Resultados
      </Button>

      <MyVerticallyCenteredModal
        Datos={props.Datos}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
