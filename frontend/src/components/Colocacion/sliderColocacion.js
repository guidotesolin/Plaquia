import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import imgColocacion1 from "../../img/Colocacion/Colocacion1.jpg";
import imgColocacion2 from "../../img/Colocacion/Colocacion2.jpg";
import imgColocacion3 from "../../img/Colocacion/Colocacion3.jpg";

export default function SliderColocacion() {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgColocacion1}
              alt="TOMAR NIVELES"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgColocacion2}
              alt="COLOCACIÓN"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgColocacion3} alt="SELLADO" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
