import React from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";

import "./Distribuidores.css";

var GetData;
var Localidad;
var Direccion;
var Telefono;

class Distribuidores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Distribuidores: [],
      Provincias: [],
      Paises: [],
    };
    this.Iniciar();
  }

  Iniciar() {
    GetData = false;
    if (this.props.Idioma === "Por") {
      Localidad = "Cidade";
      Direccion = "Direção";
      Telefono = "Telefone";
    } else if (this.props.Idioma === "Eng") {
      Localidad = "City";
      Direccion = "Address";
      Telefono = "Phone";
    } else {
      Localidad = "Ciudad";
      Direccion = "Dirección";
      Telefono = "Teléfono";
    }
  }
  //https://plaquia.herokuapp.com/paises/list
  getPaises() {
    axios
      .get("http://localhost:3000/paises/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ Paises: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //https://plaquia.herokuapp.com/provincias/list
  getProvincias() {
    axios
      .get("http://localhost:3000/provincias/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ Provincias: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //https://plaquia.herokuapp.com/distribuidores/list
  getDistribuidores() {
    axios
      .get("http://localhost:3000/distribuidores/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ Distribuidores: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getPaises();
    this.getProvincias();
    this.getDistribuidores();
    GetData = true;
  }

  MostrarDistribuidores() {
    const ListaPaises = this.state.Paises;
    return ListaPaises.map((pais) => (
      <div>
        <br />
        <h1>{pais.Pais}</h1>
        <br />
        {this.ListarProvincias(pais.idPais)}
        <hr id="SeparadorPaises" />
      </div>
    ));
  }

  ListarProvincias(idPais) {
    const ListaProvincias = this.state.Provincias;
    return ListaProvincias.map((prov) => {
      if (prov.TieneDistribuidores === 1) {
        if (prov.idPais === idPais) {
          return (
            <div>
              <li>
                <h4>{prov.Provincia}</h4>
              </li>
              <Table>
                <thead>
                  <tr>
                    <th style={{ width: "30%" }}>{Localidad}</th>
                    <th style={{ width: "50%" }}>{Direccion}</th>
                    <th style={{ width: "20%" }}>{Telefono}</th>
                  </tr>
                </thead>
                <tbody>{this.ListarDistribuidores(prov.idProvincia)}</tbody>
              </Table>
            </div>
          );
        }
      }
    });
  }

  ListarDistribuidores(idProv) {
    const ListaDistribuidores = this.state.Distribuidores;
    return ListaDistribuidores.map((dist) => {
      if (dist.idProvincia == idProv) {
        return (
          <tr>
            <td>{dist.Localidad}</td>
            <td>{dist.Direccion}</td>
            <td>{dist.Telefono}</td>
          </tr>
        );
      }
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
            {this.MostrarDistribuidores()}
          </div>
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
