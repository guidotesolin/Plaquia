import React from "react";
import "./colocacion.css";

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
                  alt="Niveles"
                />
                <Carousel.Caption>
                  <div id="caja">
                    <h3>TOMAR NIVELES</h3>
                    <p>
                      A partir del zócalo, se toman los niveles apoyando la
                      placa en la esquina donde comenzamos la colocación, y
                      marcamos el nivel.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imgColocacion2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <div id="caja">
                    <h3>COLOCACIÓN</h3>
                    <p>
                      Se aplica pegamento <strong>2 en 1 PLAQUIA</strong> en
                      seis puntos, tres en la parte superior y tres en la parte
                      inferior sobre la placa para adherirla a la pared.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imgColocacion3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <div id="caja">
                    <h3>SELLADO</h3>
                    <p>
                      Tomar las juntas con pegamento{" "}
                      <strong>2 en 1 PLAQUIA</strong> aplicándolo con una manga.
                      Se debe quitar el sobrante y luego repasar con una esponja
                      humeda en agua limpia.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      );
  }
}
