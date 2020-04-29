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
          <br />
          <Media>
            <Media.Body>
              <ul id="PasosColocacion">
                <li>
                  <h3 id="TextoSlider">NÍVEIS DE TOMADA</h3>
                  <p>
                    Do rodapé, pegamos os níveis apoiando a placa no canto onde
                    iniciamos a colocação, e marcamos o nível.
                  </p>
                </li>
                <li>
                  <h3 id="TextoSlider">LOCALIZAÇÃO</h3>
                  <p>
                    Cola <strong>2 em 1 PLAQUIA</strong> é aplicada em seis
                    pontos, três na parte superior e três na parte inferior da
                    placa para aderir à parede.
                  </p>
                </li>
                <li>
                  <h3 id="TextoSlider">VEDAÇÃO</h3>
                  <p>
                    Pegue as juntas com cola <strong>2 em 1 PLAQUIA</strong>{" "}
                    aplicando-a com uma manga. Retire o excesso e depois limpe-o
                    com uma esponja mergulhada em água limpa.
                  </p>
                </li>
              </ul>
            </Media.Body>
            <img
              width={150}
              height={150}
              src={HagaloUdMismoPor}
              alt="Modo faça-você-mesmo"
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
            <div class="BtnInstructivo">Download do manual</div>
          </a>

          <h1 id="TituloSeccion">INSTALAÇÃO</h1>
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
    case "Eng":
      return (
        <div>
          <SliderColocacion />
          <br />
          <Media>
            <Media.Body>
              <ul id="PasosColocacion">
                <li>
                  <h3 id="TextoSlider">TAKE LEVELS</h3>
                  <p>
                    From the base, we take the levels by supporting the board in
                    the corner where we start the placement, and we mark the
                    level.
                  </p>
                </li>
                <li>
                  <h3 id="TextoSlider">PLACEMENT</h3>
                  <p>
                    Glue <strong>2 in 1 PLAQUIA</strong> is applied at six
                    points, three at the top and three at the bottom on the
                    board to adhere it to the wall.
                  </p>
                </li>
                <li>
                  <h3 id="TextoSlider">SEALED</h3>
                  <p>
                    Take the joints with glue <strong>2 in 1 PLAQUIA</strong>{" "}
                    applying it with a sleeve. Remove the excess and then wipe
                    it off with a sponge dipped in clean water.
                  </p>
                </li>
              </ul>
            </Media.Body>
            <img
              width={150}
              height={150}
              src={HagaloUdMismoEng}
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
            <div class="BtnInstructivo">Download instructions</div>
          </a>

          <h1 id="TituloSeccion">INSTALLATION</h1>
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
