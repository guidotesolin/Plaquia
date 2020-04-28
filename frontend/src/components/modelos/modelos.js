import React from "react";
import "./Modelos.css";

import ModalImage from "react-modal-image";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import imgJade from "../../img/Modelos/PlacaJade.png";
import imgCuarzo from "../../img/Modelos/PlacaCuarzo.png";
import imgOnice from "../../img/Modelos/PlacaOnice.png";

export default function ModelosPlacas(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <CardDeck>
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
                  Para ambientes com personalidade, onde você quer destacar as
                  paredes com um caráter rústico e forte.
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
                  Decore seus quartos com delicadeza e estilo, suas paredes se
                  destacarão com finos brilhos de brancura e maciez.
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
                  Para todos os tipos de ambientes, a Onice é a tábua para quem
                  precisa resolver seus problemas de umidade sem fazer com que
                  suas paredes se destaquem.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      );
    case "Eng":
      return (
        <div>
          <CardDeck>
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
                  For environments with personality, where you want to highlight
                  the walls with a rustic panel, strong and with character.
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
                  Decorate your rooms with delicacy and style, your walls will
                  stand out with fine sparkles of whiteness and softness.
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
                  For all types of environments, Onice is the board for those
                  who need to solve their humidity problems without making their
                  walls stand out.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      );
    default:
      return (
        <div>
          <CardDeck>
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
          </CardDeck>
        </div>
      );
  }
}
