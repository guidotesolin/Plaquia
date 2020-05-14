import React, { Component } from "react";
import "./Colocacion.css";

import Media from "react-bootstrap/Media";

import HagaloUdMismoEsp from "../../img/Esp/HagaloUstedMismo.png";
import HagaloUdMismoPor from "../../img/Por/HagaloUstedMismo.png";
import HagaloUdMismoEng from "../../img/Eng/HagaloUstedMismo.png";

import SliderColocacion from "./sliderColocacion";

var Titulo1;
var Titulo2;
var Titulo3;
var Texto1;
var Texto2;
var Texto3;
var HagaoUstedMismo;
var Descargar;
var Instalacion;

class Colocacion extends Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      Titulo1 = "NÍVEIS DE TOMADA";
      Titulo2 = "LOCALIZAÇÃO";
      Titulo3 = "VEDAÇÃO";
      Texto1 =
        "Do rodapé, pegamos os níveis apoiando a placa no canto onde iniciamos a colocação, e marcamos o nível.";
      Texto2 =
        "Cola 2 em 1 PLAQUIA é aplicada em seis pontos, três na parte superior e três na parte inferior da placa para aderir à parede.";
      Texto3 =
        "Pegue as juntas com cola 2 em 1 PLAQUIA aplicando-a com uma manga. Retire o excesso e depois limpe-o com uma esponja mergulhada em água limpa.";
      HagaoUstedMismo = HagaloUdMismoPor;
      Descargar = "Download do manual";
      Instalacion = "INSTALAÇÃO";
    } else if (this.props.Idioma === "Eng") {
      Titulo1 = "TAKE LEVELS";
      Titulo2 = "PLACEMENT";
      Titulo3 = "SEALED";
      Texto1 =
        "From the base, we take the levels by supporting the board in the corner where we start the placement, and we mark the level.";
      Texto2 =
        "Glue 2 in 1 PLAQUIA is applied at six points, three at the top and three at the bottom on the board to adhere it to the wall.";
      Texto3 =
        "Take the joints with glue 2 in 1 PLAQUIA applying it with a sleeve. Remove the excess and then wipe it off with a sponge dipped in clean water.";
      HagaoUstedMismo = HagaloUdMismoEng;
      Descargar = "Download instructions";
      Instalacion = "INSTALLATION";
    } else {
      Titulo1 = "TOMAR NIVELES";
      Titulo2 = "COLOCACIÓN";
      Titulo3 = "SELLADO";
      Texto1 =
        "A partir del zócalo, se toman los niveles apoyando la placa en la esquina donde comenzamos la colocación, y marcamos el nivel.";
      Texto2 =
        "Se aplica pegamento 2 en 1 PLAQUIA en seis puntos, tres en la parte superior y tres en la parte inferior sobre la placa para adherirla a la pared.";
      Texto3 =
        "Tomar las juntas con pegamento 2 en 1 PLAQUIA aplicándolo con una manga. Se debe quitar el sobrante y luego repasar con una esponja humeda en agua limpia.";
      HagaoUstedMismo = HagaloUdMismoEsp;
      Descargar = "Descargar instructivo";
      Instalacion = "INSTALACIÓN";
    }
  }

  render() {
    this.Iniciar();
    return (
      <div>
        <SliderColocacion />
        <br />
        <Media>
          <Media.Body>
            <ul id="PasosColocacion">
              <li>
                <h3 id="TextoSlider">{Titulo1}</h3>
                <p>{Texto1}</p>
              </li>
              <li>
                <h3 id="TextoSlider">{Titulo2}</h3>
                <p>{Texto2}</p>
              </li>
              <li>
                <h3 id="TextoSlider">{Titulo3}</h3>
                <p>{Texto3}</p>
              </li>
            </ul>
          </Media.Body>
          <img
            width={150}
            height={150}
            src={HagaoUstedMismo}
            alt="Modalidad hagalo usted mismo"
            className="align-self-center mr-3"
          />
        </Media>
        <br />
        <a
          id="linkInstructivo"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1gWzDd8eNv1InhDpoV_A00GuN7zxa8hOP/view?usp=sharing"
          target="_blank"
        >
          <div class="BtnInstructivo">{Descargar}</div>
        </a>

        <h1 id="TituloSeccion">{Instalacion}</h1>
        <br></br>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            title="videoInstalacion"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/x2D5-lxDxO4"
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Colocacion;
