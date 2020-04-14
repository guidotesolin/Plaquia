import React from "react";
import axios from "axios";

class Distribuidores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listarDistribuidores: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://192.168.100.4:3000/Distribuidores/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ listarDistribuidores: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Pais</th>
            <th scope="col">Provincia</th>
            <th scope="col">Localidad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </table>
    );
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
}

export default Distribuidores;
