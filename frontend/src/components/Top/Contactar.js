import React from "react";

import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

var LabelPais;
var LabelProvincia;
var LabelCiudad;
var LabelNombre;
var LabelTelefono;
var LabelBoton;
var MensajeEnviado;
var PrimeraOpcion;

var Superficie;
var Modelo;
var Precio;
var Moneda;
var Cajas;
var Baldes;

class ContactarDistribuidor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Provincias: [],
      Distribuidores: [],
      DatosCargados: false,
    };
    this.Iniciar();
  }

  Iniciar() {
    Superficie = this.props.Superficie;
    Modelo = this.props.Modelo;
    Precio = this.props.PrecioCotizado;
    Moneda = this.props.Moneda;
    Cajas = this.props.CantCajas;
    Baldes = this.props.CantBaldes;
    if (this.props.Idioma === "Por") {
      LabelPais = "País";
      LabelProvincia = "Província";
      LabelCiudad = "Cidade";
      LabelNombre = "Nome";
      LabelTelefono = "Telefone";
      LabelBoton = "Contato";
      MensajeEnviado =
        "A mensagem foi enviada para o distribuidor. Você será contatado em breve!";
    } else if (this.props.Idioma === "Eng") {
      LabelPais = "Country";
      LabelProvincia = "Province";
      LabelCiudad = "City";
      LabelNombre = "Name";
      LabelTelefono = "Phone";
      LabelBoton = "Contact";
      MensajeEnviado =
        "The message has been sent to the distributor. You will be contacted shortly!";
    } else {
      LabelPais = "País";
      LabelProvincia = "Provincia";
      LabelCiudad = "Ciudad";
      LabelNombre = "Nombre";
      LabelTelefono = "Teléfono";
      LabelBoton = "Contactar";
      MensajeEnviado =
        "El mensaje ha sido enviado al distribuidor. A la brevedad se estará contactando con usted!";
    }
  }

  componentDidMount() {
    this.getProvincias();
    this.getDistribuidores();
    this.setState({ DatosCargados: true });
  }

  //
  getProvincias() {
    axios
      //   .get("http://localhost:3000/provincias/list")
      .get("https://plaquia.herokuapp.com/provincias/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ Provincias: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDistribuidores() {
    axios
      //.get("http://localhost:3000/distribuidores/list")
      .get("https://plaquia.herokuapp.com/distribuidores/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ Distribuidores: data });
        this.setState({ DatosCargados: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  EnviarCotizacion(event) {
    event.preventDefault();
    const nombre = document.getElementById("CotizadorNombre").value;
    const telefono = document.getElementById("CotizadorTelefono").value;
    const mail = document.getElementById("SelectDistribuidor").value;
    axios({
      method: "POST",
      //     url: "http://localhost:3000/cotizar",
      url: "https://plaquia.herokuapp.com/cotizar",
      data: {
        EnviarA: mail,
        nombre: nombre,
        telefono: telefono,
        superficie: Superficie,
        modelo: Modelo,
        precio: Precio,
        moneda: Moneda,
        cajas: Cajas,
        baldes: Baldes,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert(MensajeEnviado);
      } else if (response.data.msg === "fail") {
        alert(Error);
      }
    });
  }
  SelecionarDistribuidor() {
    const IdProv = parseInt(
      document.getElementById("DistribuidorProvincia").value
    );
    const ListaDistribuidores = this.state.Distribuidores;
    const SelectDistribuidor = document.getElementById("SelectDistribuidor");
    SelectDistribuidor.disabled = false;
    SelectDistribuidor.innerHTML = "";
    ListaDistribuidores.map((x) => {
      if (x.idProvincia === IdProv) {
        var dist = document.createElement("option");
        dist.value = x.Mail;
        dist.text = x.Localidad;
        return SelectDistribuidor.appendChild(dist);
      }
    });
  }
  ShowProvincias() {
    PrimeraOpcion = document.createElement("option");
    PrimeraOpcion.value = "";
    PrimeraOpcion.hidden = true;
    var Pais = document.getElementById("DistribuidorPais").value;
    const Provincias = this.state.Provincias;
    const SelectProvincia = document.getElementById("DistribuidorProvincia");
    const SelectDistribuidor = document.getElementById("SelectDistribuidor");
    SelectDistribuidor.disabled = true;
    SelectProvincia.disabled = false;
    SelectProvincia.innerHTML = "";

    if (this.props.Idioma === "Por") {
      if (Pais === "1") {
        PrimeraOpcion.text = "Selecione a província";
      } else if (Pais === "3") {
        PrimeraOpcion.text = "Selecione o estado";
      } else {
        PrimeraOpcion.text = "Selecione o departamento";
      }
    } else if (this.props.Idioma === "Eng") {
      if (Pais === "1") {
        PrimeraOpcion.text = "Select province";
      } else if (Pais === "3") {
        PrimeraOpcion.text = "Select state";
      } else {
        PrimeraOpcion.text = "Select department";
      }
    } else {
      if (Pais === "1") {
        PrimeraOpcion.text = "Seleccione provincia";
      } else if (Pais === "3") {
        PrimeraOpcion.text = "Seleccione estado";
      } else {
        PrimeraOpcion.text = "Seleccione departamento";
      }
    }
    SelectProvincia.appendChild(PrimeraOpcion);
    Provincias.map((x) => {
      if (x.idPais == Pais) {
        if (x.TieneDistribuidores == "1") {
          var provincia = document.createElement("option");
          provincia.value = x.idProvincia;
          provincia.text = x.Provincia;
          return SelectProvincia.appendChild(provincia);
        }
      }
    });
  }

  render() {
    this.Iniciar();
    if (this.state.DatosCargados) {
      return (
        <Form id="ContactoCotizador" onSubmit={this.EnviarCotizacion}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Control
                  as="select"
                  required
                  id="DistribuidorPais"
                  onChange={this.ShowProvincias.bind(this)}
                >
                  <option value="" disabled selected hidden>
                    {LabelPais}
                  </option>
                  <option value="1">Argentina</option>
                  <option value="2">Bolivia</option>
                  <option value="3">Brasil</option>
                  <option value="4">Paraguay</option>
                  <option value="5">Uruguay</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  as="select"
                  required
                  id="DistribuidorProvincia"
                  disabled
                  onChange={this.SelecionarDistribuidor.bind(this)}
                >
                  <option value="" disabled selected hidden>
                    {LabelProvincia}
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  as="select"
                  required
                  id="SelectDistribuidor"
                  disabled
                >
                  <option value="" disabled selected hidden>
                    {LabelCiudad}
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>{LabelNombre}</Form.Label>
                <Form.Control
                  id="CotizadorNombre"
                  type="text"
                  autocomplete="off"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>{LabelTelefono}</Form.Label>
                <Form.Control
                  id="CotizadorTelefono"
                  type="text"
                  autocomplete="off"
                  required
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="outline-success" type="submit">
            {LabelBoton}
          </Button>
        </Form>
      );
    } else {
      return <div> Cargando...</div>;
    }
  }
}

export default ContactarDistribuidor;
