import React from "react";
import axios from "axios";
import "./Distribuidores.css";

var GetData;
var Pais;
var Provincia;
var Localidad;
var Direccion;
var Telefono;

var ArrayPaises;
var ArrayProvincias;

var IndicePais;
var IndiceProvincia;

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
    ArrayPaises = [];
    ArrayProvincias = [];
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

  // Logica de corrimiento
  Test() {
    const CantPaises = ArrayPaises.length;
    const CantProvincias = ArrayProvincias.length;
    for (var x = 0; x < CantPaises; x++) {
      return <p>{ArrayPaises[x]}</p>;
    }
  }
  LlenarListas() {
    this.state.listarDistribuidores.map((distribuidor) => {
      ArrayPaises.push(distribuidor.pais);
      ArrayProvincias.push(distribuidor.provincia);
    });
    ArrayPaises = [...new Set(ArrayPaises)];
    ArrayProvincias = [...new Set(ArrayProvincias)];
  }
  ShowDistribuidores(IndicePais, IndiceProvincia) {
    IndicePais = 0;
    IndiceProvincia = 0;
    return (
      <div>
        {this.ShowPaises(IndicePais)}
        {this.ShowProvincias(IndiceProvincia)}
        <div class="table-responsive">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">{Localidad}</th>
                <th scope="col">{Direccion}</th>
                <th scope="col">{Telefono}</th>
              </tr>
            </thead>
            <tbody>{this.InfoDistribuidor(IndicePais, IndiceProvincia)}</tbody>
          </table>
        </div>
      </div>
    );
  }

  ShowPaises(IndicePais) {
    return (
      <div>
        <hr />
        <h1>{ArrayPaises[IndicePais]}</h1>
        <br />
      </div>
    );
  }
  ShowProvincias(IndiceProvincia) {
    return (
      <div>
        <li>
          <h3>{ArrayProvincias[IndiceProvincia]}</h3>
        </li>
      </div>
    );
  }

  InfoDistribuidor(IndicePais, IndiceProvincia) {
    return this.state.listarDistribuidores.map((distribuidor) => {
      if (distribuidor.pais === ArrayPaises[IndicePais]) {
        if (distribuidor.provincia === ArrayProvincias[IndiceProvincia]) {
          return (
            <tr>
              <td>{distribuidor.localidad}</td>
              <td>{distribuidor.direccion}</td>
              <td>{distribuidor.telefono}</td>
            </tr>
          );
        }
      }
    });
  }

  render() {
    if (GetData) {
      this.LlenarListas();
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
            {this.Test()}
            {this.ShowDistribuidores()}
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
