import React from "react";

import "./Colocacion.css";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import imgColocacion1 from "../../img/colocacion/Colocacion1.png";
import imgColocacion2 from "../../img/colocacion/Colocacion2.png";
import imgColocacion3 from "../../img/colocacion/Colocacion3.png";

export default function SliderColocacion(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>SliderColocacion en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>SliderColocacion en ingles</p>
        </div>
      );
    default:
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
                <Carousel.Caption>
                  <div id="caja">
                    <h4>TOMAR NIVELES</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imgColocacion2}
                  alt="COLOCACIÓN"
                />
                <Carousel.Caption>
                  <div id="caja">
                    <h4>COLOCACIÓN</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imgColocacion3}
                  alt="SELLADO"
                />
                <Carousel.Caption>
                  <div id="caja">
                    <h4>SELLADO</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      );
  }
}
