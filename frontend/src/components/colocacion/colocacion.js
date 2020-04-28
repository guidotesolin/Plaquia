import React from "react";
import "./Colocacion.css";

import Media from "react-bootstrap/Media";

import HagaloUdMismoEsp from "../../img/Esp/HagaloUstedMismo.png";
import HagaloUdMismoPor from "../../img/Por/HagaloUstedMismo.png";
import HagaloUdMismoEng from "../../img/Eng/HagaloUstedMismo.png";

import SliderColocacion from "./sliderColocacion";

export default function SliderResultados(props) {
  switch (props.Idioma) {
    case "Por":
      return (
        <div>
          <SliderColocacion />
        </div>
      );
    case "Eng":
      return (
        <div>
          <SliderColocacion />
        </div>
      );
    default:
      return (
        <div>
          <SliderColocacion />
          <br />
          <Media>
            <Media.Body>
              <ul id="PasosColocacion">
                <li>
                  <h3 id="TextoSlider">TOMAR NIVELES</h3>
                  <p>
                    A partir del zócalo, se toman los niveles apoyando la placa
                    en la esquina donde comenzamos la colocación, y marcamos el
                    nivel.
                  </p>
                </li>
                <li>
                  <h3 id="TextoSlider">COLOCACIÓN</h3>
                  <p>
                    Se aplica pegamento <strong>2 en 1 PLAQUIA</strong> en seis
                    puntos, tres en la parte superior y tres en la parte
                    inferior sobre la placa para adherirla a la pared.
                  </p>
                </li>
                <li>
                  <h3 id="TextoSlider">SELLADO</h3>
                  <p>
                    Tomar las juntas con pegamento{" "}
                    <strong>2 en 1 PLAQUIA</strong> aplicándolo con una manga.
                    Se debe quitar el sobrante y luego repasar con una esponja
                    humeda en agua limpia.
                  </p>
                </li>
              </ul>
            </Media.Body>
            <img
              width={150}
              height={150}
              src={HagaloUdMismoEsp}
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
            <div class="BtnInstructivo">Descargar instructivo</div>
          </a>

          <h1 id="TituloSeccion">INSTALACIÓN</h1>
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
