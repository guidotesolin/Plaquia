import React, { Component } from "react";
// Componentes de React
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Componentes creados
import Ventajas from "../components/Ventajas";
import SliderColocacion from "../components/Colocacion/Colocacion";
import ModelosPlacas from "../components/Modelos/Modelos";
import SliderResultados from "../components/Resultados";
import Distribuidores from "../components/Distribuidores";
import Contacto from "../components/Contacto";
import Calculadora from "../components/Calculadora/Padre";
// Imagenes
import Logo from "../img/esp/LogoCompleto.png";
import imgFuncionamiento from "../img/esp/Funcionamiento.jpg";
// Css
import "../css/Body.css";

class RenderizarSpa extends Component {
  render() {
    return (
      <div>
        <div id="Top">
          <Container>
            <Row>
              <Col>
                <Image id="Logo" src={Logo} fluid />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <h4 id="DescripcionPlaquia">
                Somos la primera fábrica de placas anti-humedad en desarrollar
                un producto que se adapta para la venta masiva, con un envase
                revolucionario que facilita su estiba y comercialización.
                Pensada con la modalidad, ¡Hágalo usted mismo!
              </h4>
            </Row>
          </Container>
        </div>
        <div id="Funcionamiento">
          <Container fluid>
            <h1 id="TituloSeccion">¿CÓMO FUNCIONA?</h1>
            <br />
            <Row>
              <Image src={imgFuncionamiento} fluid id="imgFuncionamiento" />
            </Row>
            <Ventajas Idioma="Esp" />
          </Container>
        </div>
        <div id="Colocacion">
          <Container>
            <h1 id="TituloSeccion">COLOCACIÓN</h1>
            <br />
            <SliderColocacion />
            <br />
            <ul>
              <li>
                <h3 id="TextoSlider">TOMAR NIVELES</h3>
                <p>
                  A partir del zócalo, se toman los niveles apoyando la placa en
                  la esquina donde comenzamos la colocación, y marcamos el
                  nivel.
                </p>
              </li>
              <li>
                <h3 id="TextoSlider">COLOCACIÓN</h3>
                <p>
                  Se aplica pegamento <strong>2 en 1 PLAQUIA</strong> en seis
                  puntos, tres en la parte superior y tres en la parte inferior
                  sobre la placa para adherirla a la pared.
                </p>
              </li>
              <li>
                <h3 id="TextoSlider">SELLADO</h3>
                <p>
                  Tomar las juntas con pegamento <strong>2 en 1 PLAQUIA</strong>{" "}
                  aplicándolo con una manga. Se debe quitar el sobrante y luego
                  repasar con una esponja humeda en agua limpia.
                </p>
              </li>
            </ul>
            <br></br>
            <h1 id="TituloSeccion">INSTALACIÓN</h1>
            <br></br>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="videoInstalacion"
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/x2D5-lxDxO4"
              ></iframe>
            </div>
          </Container>
        </div>
        <div id="Modelos">
          <h1 id="TituloSeccion">MODELOS DISPONIBLES</h1>
          <br />
          <ModelosPlacas />
        </div>
        <div id="Resultados">
          <h1 id="TituloSeccion">RESULTADOS</h1>
          <br />
          <SliderResultados />
          <br />
        </div>
        <div id="Distribuidores">
          <Container>
            <h1 id="TituloSeccion">DISTRIBUIDORES</h1>
            <br />
            <div class="container-fluid">
              <div class="container" id="ContainerMapa">
                <iframe
                  id="Mapa"
                  title="MapaDistribuidores"
                  src="https://www.google.com/maps/d/u/0/embed?mid=1qeeBbHhgLSC6DD5eiDsElU6enZRMQa4w"
                  width="640"
                  height="480"
                ></iframe>
              </div>
              <br />
            </div>
            <Distribuidores />
          </Container>
        </div>
        <div id="Calculadora">
          <h1 id="TituloSeccion">CALCULADORA</h1>
          <br />
          <Calculadora />
          <br />
        </div>
        <div id="Contacto">
          <h1 id="TituloSeccion">CONTACTO</h1>
          <br />
          <Container>
            <p>
              Envienos un mail a <strong>contacto@plaquia.com.ar</strong>, o
              contactese mediante el siguiente formulario.
            </p>
            <p id="EpigrafeMail">
              <i>Todos los campos son obligatorios</i>
            </p>
            <Contacto />
          </Container>
        </div>
      </div>
    );
  }
}

export default RenderizarSpa;
