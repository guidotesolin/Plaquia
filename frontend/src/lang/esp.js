import React, { Component } from "react";
// Componentes de React
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Componentes creados
import Ventajas from "../components/ventajas";
import SliderColocacion from "../components/colocacion/colocacion";
import ModelosPlacas from "../components/modelos/modelos";
import SliderResultados from "../components/resultados";
import Distribuidores from "../components/distribuidores";
import Contacto from "../components/formulario/contacto";
// Imagenes
import Logo from "../img/esp/LogoCompleto.png";
import imgFuncionamiento from "../img/esp/Funcionamiento.png";

class RenderizarSpa extends Component {
  render() {
    return (
      <div>
        <div id="logo">
          <Container>
            <Row>
              <Col>
                <Image src={Logo} fluid />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <h4>
                Somos la primera fábrica de placas anti-humedad en desarrollar
                un producto que se adapta para la venta masiva, con un envase
                revolucionario que facilita su estiba y comercialización.
                Pensada con la modalidad, ¡Hágalo usted mismo!
              </h4>
            </Row>
          </Container>
        </div>
        <div id="Funcionamiento">
          <Container>
            <h1>¿CÓMO FUNCIONA?</h1>
            <Row>
              <Col>
                Las placas de yeso absorben la humedad que ingresa desde las
                paredes y su estructura ultra porosa elimina por un fenómeno
                físico de microevaporación
              </Col>
              <Image src={imgFuncionamiento} fluid />
            </Row>
            <Ventajas Idioma="Esp" />
          </Container>
        </div>
        <div id="Colocacion">
          <Container>
            <h1>COLOCACIÓN</h1>
            <SliderColocacion />
            <br></br>
            <h1>INSTALACIÓN</h1>
            <br></br>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="vidoInstalacion"
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/x2D5-lxDxO4"
              ></iframe>
            </div>
          </Container>
        </div>
        <div id="Modelos">
          <h1>MODELOS DISPONIBLES</h1>
          <ModelosPlacas />
        </div>
        <div id="Resultados">
          <h1>RESULTADOS</h1>
          <SliderResultados />
        </div>
        <div id="Distribuidores">
          <Container>
            <h1>DISTRIBUIDORES</h1>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/d/u/0/embed?mid=1qeeBbHhgLSC6DD5eiDsElU6enZRMQa4w"
              width="640"
              height="480"
            ></iframe>
            <Distribuidores />
          </Container>
        </div>
        <div id="Calculadora">
          {" "}
          <h1>Calculadora</h1>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec viverra imperdiet arcu, id egestas nunc mattis nec.
          Phasellus gravida porttitor nibh at fermentum. Quisque dapibus, leo at
          tempus varius, sapien nunc scelerisque eros, a varius ante nibh quis
          urna. Duis suscipit justo blandit nulla pellentesque rutrum. Etiam dui
          sem, tristique sit amet semper at, viverra in massa. In hac habitasse
          platea dictumst. Sed semper mollis leo, at hendrerit ligula congue
          eget. Nullam semper urna blandit, pretium velit ut, rhoncus massa. Nam
          rutrum feugiat viverra. Duis tempor tristique purus, et tempus arcu
          viverra vel. Proin fringilla urna nisi, at porttitor risus accumsan
          id. Mauris dui lectus, venenatis at mi vitae, semper sodales nibh.
          Donec quis fringilla lorem. In at arcu ullamcorper, malesuada ante
          eget, suscipit felis. Vestibulum sed lectus magna. Sed ac sem at magna
          lobortis mattis. Donec tempus est sed nisi facilisis, in porttitor
          neque finibus. Nullam tempus, tortor ac semper euismod, mi tellus
        </div>
        <div id="Contacto">
          <h1>CONTACTO</h1>
          <p>
            Envienos un mail a <strong>contacto@plaquia.com.ar</strong>, o
            contactese mediante el siguiente formulario.
          </p>
          <p>Todos los campos son obligatorios</p>
          <br />
          <Container>
            <Contacto />
          </Container>
        </div>
      </div>
    );
  }
}

export default RenderizarSpa;
