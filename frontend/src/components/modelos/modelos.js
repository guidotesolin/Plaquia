import React from "react";
import ModalImage from "react-modal-image";
import "./Modelos.css";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import imgJade from "../../img/modelos/PlacaJade.png";
import imgCuarzo from "../../img/modelos/PlacaCuarzo.png";
import imgOnice from "../../img/modelos/PlacaOnice.png";

export default function ModelosPlacas(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <p>ModelosPlacas en portuges</p>
        </div>
      );
    case "Eng":
      return (
        <div>
          <p>ModelosPlacas en ingles</p>
        </div>
      );
    default:
      return (
        <div>
          <CardGroup>
            <Card>
              <Card.Header>
                <h3 id="nombrePlaca">Cuarzo</h3>
              </Card.Header>
              <ModalImage
                id="fotoPlaca"
                small={imgCuarzo}
                large={imgCuarzo}
                hideDownload="true"
                hideZoom="false"
                alt="Cuarzo"
              />
              <Card.Body>
                <Card.Text>
                  Para ambientes con personalidad, donde se quiere destacar los
                  muros con una placa rústica, fuerte y con carácter.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <h3 id="nombrePlaca">Jade</h3>
              </Card.Header>
              <ModalImage
                id="fotoPlaca"
                small={imgJade}
                large={imgJade}
                hideDownload="true"
                hideZoom="false"
                alt="Jade"
              />
              <Card.Body>
                <Card.Text>
                  Decora tus ambientes con delicadeza y estilo, tus muros
                  resaltarán con finos destellos de blancura y suavidad.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <h3 id="nombrePlaca">Onice</h3>
              </Card.Header>
              <ModalImage
                id="fotoPlaca"
                small={imgOnice}
                large={imgOnice}
                hideDownload="true"
                hideZoom="false"
                alt="Onice"
              />
              <Card.Body>
                <Card.Text>
                  Para todo tipo de ambientes, Onice es la placa para los que
                  necesitan solucionar sus problemas de humedad sin que resalten
                  sus muros.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      );
  }
}
