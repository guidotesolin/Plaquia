import React from "react";
import axios from "axios";
import "./Distribuidores.css";

var GetData;
var Pais;
var Provincia;
var Localidad;
var Direccion;
var Telefono;

class Distribuidores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listarDistribuidores: [],
    };
    this.Iniciar();
  }

  Iniciar() {
    GetData = false;
    if (this.props.Idioma === "Por") {
      Pais = "País";
      Provincia = "Província";
      Localidad = "Localização";
      Direccion = "Direção";
      Telefono = "Telefone";
    } else if (this.props.Idioma === "Eng") {
      Pais = "Country";
      Provincia = "State";
      Localidad = "Town";
      Direccion = "Address";
      Telefono = "Phone";
    } else {
      Pais = "Pais";
      Provincia = "Provincia";
      Localidad = "Localidad";
      Direccion = "Direccion";
      Telefono = "Telefono";
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/Distribuidores/list")
      .then((res) => {
        const data = res.data.data;
        GetData = true;
        this.setState({ listarDistribuidores: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadFillData() {
    return this.state.listarDistribuidores.map((distribuidor) => {
      return (
        <tr>
          <th>{distribuidor.pais}</th>
          <td>{distribuidor.provincia}</td>
          <td>{distribuidor.localidad}</td>
          <td>{distribuidor.direccion}</td>
          <td>{distribuidor.telefono}</td>
        </tr>
      );
    });
  }

  render() {
    if (GetData) {
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
          </div>
          <table class="table table-hover table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">{Pais}</th>
                <th scope="col">{Provincia}</th>
                <th scope="col">{Localidad}</th>
                <th scope="col">{Direccion}</th>
                <th scope="col">{Telefono}</th>
              </tr>
            </thead>
            <tbody>{this.loadFillData()}</tbody>
          </table>
        </div>
      );
    } else {
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
          </div>
        </div>
      );
    }
  }
}

export default Distribuidores;
