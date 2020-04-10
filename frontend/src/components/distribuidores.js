import React from "react";
import Table from "react-bootstrap/Table";
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
        alert(error);
      });
  }

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Pais</th>
            <th>Provincia</th>
            <th>Localidad</th>
            <th>Direccion</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>{this.loadFillData()}</tbody>
      </Table>
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
