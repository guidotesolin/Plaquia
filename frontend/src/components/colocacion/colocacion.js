import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import imgColocacion1 from "../../img/colocacion/Colocacion1.png";
import imgColocacion2 from "../../img/colocacion/Colocacion2.png";
import imgColocacion3 from "../../img/colocacion/Colocacion3.png";

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
