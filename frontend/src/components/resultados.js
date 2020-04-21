import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import Resultado1 from "../img/antesydespues/esp/Antesydespues1.png";
import Resultado2 from "../img/antesydespues/esp/Antesydespues2.png";
import Resultado3 from "../img/antesydespues/esp/Antesydespues3.png";
import Resultado4 from "../img/antesydespues/esp/Antesydespues4.png";

export default function SliderResultados(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>SliderResultados en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>SliderResultados en ingles</p>
        </div>
      );
    default:
      return (
        <div>
          <Container>
            <Carousel indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Resultado1}
                  alt="Antes y despues de colocar Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Resultado2}
                  alt="Antes y despues de colocar Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Resultado3}
                  alt="Antes y despues de colocar Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Resultado4}
                  alt="Antes y despues de colocar Plaquia"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      );
  }
}
