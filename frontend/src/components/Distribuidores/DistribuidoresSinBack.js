import React from "react";
import "./Distribuidores.css";

import Table from "react-bootstrap/Table";

var Localidad;
var Direccion;
var Telefono;

class Distribuidores extends React.Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      Localidad = "Localização";
      Direccion = "Direção";
      Telefono = "Telefone";
    } else if (this.props.Idioma === "Eng") {
      Localidad = "City";
      Direccion = "Address";
      Telefono = "Phone";
    } else {
      Localidad = "Localidad";
      Direccion = "Direccion";
      Telefono = "Telefono";
    }
  }

  render() {
    this.Iniciar();
    return (
      <div>
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
          <h1>Argentina</h1>
          <br />
          <h4>
            <li>Buenos Aires</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Benavidez</td>
                <td>Av. Benavidez 3614</td>
                <td>011 5052-6365</td>
              </tr>
              <tr>
                <td>Caseros</td>
                <td>Lisandro de la Torre 4272</td>
                <td>011 5630-1915</td>
              </tr>
              <tr>
                <td>Ciudadela</td>
                <td>Av. Marcelo T. de Alvear y Av. San Martín</td>
                <td>011 4488-7733</td>
              </tr>
              <tr>
                <td>Ituzaingo</td>
                <td>Av. Presidente Perón 7042</td>
                <td>011 6462-4582</td>
              </tr>
              <tr>
                <td>Médanos</td>
                <td>Anchorena 123</td>
                <td>291 5087-317</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>Chaco</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>R. Saenz Peña</td>
                <td>San Martin 38</td>
                <td>0364 442-7345</td>
              </tr>
              <tr>
                <td>Resistencia</td>
                <td>Gob. Mansilla 77</td>
                <td>0362 446-2582</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>Cordoba</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rio Cuarto</td>
                <td>Av Sabattini 1887 </td>
                <td>358 411-3754</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>Entre Rios</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parana</td>
                <td>Av. Francisco Ramirez 4848</td>
                <td>343 435 2212</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>La Pampa</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>General Pico</td>
                <td>Viscardi 345 - Parque Industrial</td>
                <td>02302 430191</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>Misiones</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>San Vicente</td>
                <td>Ruta Nacional 14 Km 974</td>
                <td>03755 460550</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>Salta</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Salta</td>
                <td>Av. Bolivia 1858</td>
                <td>0387 4392146</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>Santa Fe</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calchaqui </td>
                <td>25 de Mayo 445</td>
                <td>03483 470663</td>
              </tr>
              <tr>
                <td>Reconquista</td>
                <td>Habegger y Lucas Funes</td>
                <td>3482 433 721</td>
              </tr>
              <tr>
                <td>San Jorge </td>
                <td>Corrientes 1276</td>
                <td>03406 440446</td>
              </tr>
              <tr>
                <td>Santa Fe</td>
                <td>Pedro Ceneno 3318</td>
                <td>342 6159754</td>
              </tr>
              <tr>
                <td>Santa Fe</td>
                <td>25 de Mayo 3600</td>
                <td>342 412 0857</td>
              </tr>
              <tr>
                <td>Santa Fe</td>
                <td>Av. Peñaloza 6498</td>
                <td>342 484 1700</td>
              </tr>
            </tbody>
          </Table>
          <hr id="separador" />
          <h1>Bolivia</h1>
          <br />
          <h4>
            <li>Santa Cruz</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Santa Cruz de la Sierra</td>
                <td>Av. Cristo Redentor 748</td>
                <td>591 74166051</td>
              </tr>
            </tbody>
          </Table>
          <hr id="separador" />
          <h1>Brasil</h1>
          <br />
          <h4>
            <li>Río Grande del Sur</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Porto Alegre</td>
                <td>Porto Alegre</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>São Paulo</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>São Paulo</td>
                <td>São Paulo</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <hr id="separador" />
          <h1>Paraguay</h1>
          <br />
          <h4>
            <li>Asunción</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Asunción</td>
                <td>Mayor Aranda 6990</td>
                <td>+595981256868</td>
              </tr>
            </tbody>
          </Table>
          <hr id="separador" />
          <h1>Uruguay</h1>
          <br />
          <h4>
            <li>Canelones</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Canelones</td>
                <td>Ruta 8 Km 22,5</td>
                <td>+59893667806</td>
              </tr>
            </tbody>
          </Table>
          <h4>
            <li>Montevideo</li>
          </h4>
          <Table>
            <thead>
              <tr>
                <th style={{ width: "30%" }}>{Localidad}</th>
                <th style={{ width: "50%" }}>{Direccion}</th>
                <th style={{ width: "20%" }}>{Telefono}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Montevideo</td>
                <td>Miguelete 1622</td>
                <td>+59899511038</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Distribuidores;
