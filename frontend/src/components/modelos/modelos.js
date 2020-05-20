import React, { Component } from "react";
import "./Modelos.css";

import ModalImage from "react-modal-image";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import smallJade from "../../img/Modelos/smallJade.jpg";
import smallCuarzo from "../../img/Modelos/smallCuarzo.jpg";
import smallOnice from "../../img/Modelos/smallOnice.jpg";

import imgJade from "../../img/Modelos/PlacaJade.jpg";
import imgCuarzo from "../../img/Modelos/PlacaCuarzo.jpg";
import imgOnice from "../../img/Modelos/PlacaOnice.jpg";

var TextoJade;
var TextoOnice;
var TextoCuarzo;

class ModelosPlacas extends Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      TextoJade =
        "Decore seus quartos com delicadeza e estilo, suas paredes se destacarão com finos brilhos de brancura e maciez.";
      TextoOnice =
        "Para todos os tipos de ambientes, a Onice é a tábua para quem precisa resolver seus problemas de umidade sem fazer com que suas paredes se destaquem.";
      TextoCuarzo =
        "Para ambientes com personalidade, onde você quer destacar as paredes com um caráter rústico e forte.";
    } else if (this.props.Idioma === "Eng") {
      TextoJade =
        "Decorate your rooms with delicacy and style, your walls will stand out with fine sparkles of whiteness and softness.";
      TextoOnice =
        "For all types of environments, Onice is the board for those who need to solve their humidity problems without making their walls stand out.";
      TextoCuarzo =
        "For environments with personality, where you want to highlight the walls with a rustic panel, strong and with character.";
    } else {
      TextoJade =
        "Decora tus ambientes con delicadeza y estilo, tus muros resaltarán con finos destellos de blancura y suavidad.";
      TextoOnice =
        "Para todo tipo de ambientes, Onice es la placa para los que necesitan solucionar sus problemas de humedad sin que resalten sus muros.";
      TextoCuarzo =
        "Para ambientes con personalidad, donde se quiere destacar los muros con una placa rústica, fuerte y con carácter.";
    }
  }
  render() {
    this.Iniciar();
    return (
      <div id="DivModelos">
        <CardDeck>
          <Card id="TarjetaModelos">
            <Card.Header>
              <h3 id="nombrePlaca">Cuarzo</h3>
            </Card.Header>
            <ModalImage
              id="fotoPlaca"
              small={smallCuarzo}
              large={imgCuarzo}
              hideDownload="true"
              hideZoom="false"
              alt="Cuarzo"
            />
            <Card.Body>
              <Card.Text>{TextoCuarzo}</Card.Text>
            </Card.Body>
          </Card>
          <Card id="TarjetaModelos">
            <Card.Header>
              <h3 id="nombrePlaca">Jade</h3>
            </Card.Header>
            <ModalImage
              id="fotoPlaca"
              small={smallJade}
              large={imgJade}
              hideDownload="true"
              hideZoom="false"
              alt="Jade"
            />
            <Card.Body>
              <Card.Text>{TextoJade}</Card.Text>
            </Card.Body>
          </Card>
          <Card id="TarjetaModelos">
            <Card.Header>
              <h3 id="nombrePlaca">Onice</h3>
            </Card.Header>
            <ModalImage
              id="fotoPlaca"
              small={smallOnice}
              large={imgOnice}
              hideDownload="true"
              hideZoom="false"
              alt="Onice"
            />
            <Card.Body>
              <Card.Text>{TextoOnice}</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default ModelosPlacas;
