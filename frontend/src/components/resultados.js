import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import Resultado1 from "../img/antesydespues/esp/Antesydespues1.png";
import Resultado2 from "../img/antesydespues/esp/Antesydespues2.png";
import Resultado3 from "../img/antesydespues/esp/Antesydespues3.png";
import Resultado4 from "../img/antesydespues/esp/Antesydespues4.png";

import Eng1 from "../img/antesydespues/eng/Antesydespues1.png";
import Eng2 from "../img/antesydespues/eng/Antesydespues2.png";
import Eng3 from "../img/antesydespues/eng/Antesydespues3.png";
import Eng4 from "../img/antesydespues/eng/Antesydespues4.png";

import Por1 from "../img/antesydespues/por/AntesyDespues1.png";
import Por2 from "../img/antesydespues/por/AntesyDespues2.png";
import Por3 from "../img/antesydespues/por/AntesyDespues3.png";
import Por4 from "../img/antesydespues/por/AntesyDespues4.png";

export default function SliderResultados(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <Container>
            <Carousel indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Por1}
                  alt="Antes e depois da colocação do Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Por2}
                  alt="Antes e depois da colocação do Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Por3}
                  alt="Antes e depois da colocação do Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Por4}
                  alt="Antes e depois da colocação do Plaquia"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      );
    case "Eng":
      return (
        <div>
          <Container>
            <Carousel indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Eng1}
                  alt="Before and after placing Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Eng2}
                  alt="Before and after placing Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Eng3}
                  alt="Before and after placing Plaquia"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Eng4}
                  alt="Before and after placing Plaquia"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
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
