import React from "react";
import "./Top.css";

import Cotizador from "./Cotizador";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LogoEsp from "../../img/Esp/LogoCompleto.png";
import LogoEng from "../../img/Eng/LogoCompleto.png";
import LogoPor from "../../img/Por/LogoCompleto.png";

import AntesYDespuesEsp from "../../img/antesydespues/esp/Antesydespues3.jpg";
import AntesYDespuesPor from "../../img/antesydespues/por/AntesyDespues3.jpg";
import AntesYDespuesEng from "../../img/antesydespues/eng/Antesydespues3.jpg";

import ColocacionEsp from "../../img/Esp/SliderColocacion.jpg";
import ColocacionPor from "../../img/Por/SliderColocacion.jpg";
import ColocacionEng from "../../img/Eng/SliderColocacion.jpg";

import ModelosEsp from "../../img/Esp/SliderModelos.jpg";
import ModelosEng from "../../img/Eng/SliderModelos.jpg";
import ModelosPor from "../../img/Por/SliderModelos.jpg";

var Descripcion;
var Logo;
var SliderAntesyDespues;
var SliderColocacion;
var SliderModelos;
var TextoBoton;

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
    this.Iniciar();
  }

  Iniciar() {
    if (this.props.Idioma === "Por") {
      SliderAntesyDespues = AntesYDespuesPor;
      SliderColocacion = ColocacionPor;
      SliderModelos = ModelosPor;
      TextoBoton = "Cotação online";
      Logo = LogoPor;
      Descripcion =
        "Somos a primeira fábrica de placas anti-humidade a desenvolver um produto adaptado para a venda em massa, com uma embalagem revolucionária que facilita a sua arrumação e comercialização. Pensado com a modalidade, Faça-o você mesmo!";
    } else if (this.props.Idioma === "Eng") {
      SliderAntesyDespues = AntesYDespuesEng;
      SliderColocacion = ColocacionEng;
      SliderModelos = ModelosEng;
      TextoBoton = "Calculate online";
      Logo = LogoEng;
      Descripcion =
        "We are the first factory of anti-humidity boards to develop a product that is adapted for mass sale, with a revolutionary packaging that facilitates its storage and commercialization. Thought with the modality: Do it yourself!";
    } else {
      Descripcion =
        "Somos la primera fábrica de placas anti-humedad en desarrollar un producto que se adapta para la venta masiva, con un envase revolucionario que facilita su estiba y comercialización. Pensada con la modalidad, ¡Hágalo usted mismo!";
      Logo = LogoEsp;
      SliderAntesyDespues = AntesYDespuesEsp;
      SliderColocacion = ColocacionEsp;
      SliderModelos = ModelosEsp;
      TextoBoton = "Cotizar online";
    }
  }

  render() {
    return (
      <div>
        <div id="CarouselTop">
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliderAntesyDespues}
                alt="Antes y despues"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliderColocacion}
                alt="Colocacion"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliderModelos}
                alt="Modelos"
              />
            </Carousel.Item>
          </Carousel>
          <br />
          <div id="DivBotonCotizador">
            <Button
              id="BotonCotizar"
              size="lg"
              onClick={() => this.setState({ modalShow: true })}
            >
              {TextoBoton}
            </Button>
          </div>
          <Cotizador
            Idioma={this.props.Idioma}
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
          <br />
        </div>

        <div id="Top">
          <Container>
            <Row>
              <Col>
                <Image id="Logo" src={Logo} fluid />
              </Col>
            </Row>
            <Row>
              <h4 id="DescripcionPlaquia">{Descripcion}</h4>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Top;
