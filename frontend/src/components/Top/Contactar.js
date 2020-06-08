import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

var PrimeraOpcion;

const ProvinciasArgentina = [
  "Buenos Aires",
  "Chaco",
  "Córdoba",
  "Entre Ríos",
  "La Pampa",
  "Misiones",
  "Río Negro",
  "Salta",
  "Santa Fe",
];
const DepartamentosUruguay = ["Canelones", "Montevideo"];
const DepartamentosBolivia = ["Santa Cruz"];
const EstadosDeBrasil = ["Río Grande del Sur", "São Paulo"];
const DepartamentosParaguay = ["Asunción"];

const DistribuidoresBuenosAires = [
  "Algarrobo",
  "Benavidez",
  "Caseros",
  "Ciudadela",
  "Hilario",
  "Ituzaingo",
  "Médanos",
  "Patagones",
];
const DistribuidoresChaco = ["Resistencia", "Roque Saenz Peña"];
const DistribuidoresCordoba = ["Rio Cuarto"];
const DistribuidoresEntreRios = ["Paraná"];
const DistribuidoresLaPampa = ["General Pico", "La Adela"];
const DistribuidoresMisiones = ["San Vicente"];
const DistribuidoresRioNegro = ["Río Colorado"];
const DistribuidoresSalta = ["Salta"];
const DistribuidoresSantaFe = [
  "Calchaquí",
  "Reconquista",
  "San Jorge",
  "Santa Fe",
];
const DistribuidoresSantaCruz = ["Santa Cruz de la Sierra"];
const DistribuidoresRioGrandedelSur = ["Porto Alegre"];
const DistribuidoresSaoPaulo = ["Santa Cruz de la Sierra"];
const DistribuidoresAsuncion = ["Asunción"];
const DistribuidoresCanelones = ["Canelones"];
const DistribuidoresMontevideo = ["Montevideo"];

class ContactarDistribuidor extends React.Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      //
    } else if (this.props.Idioma === "Eng") {
      //
    } else {
      //
    }
  }
  EnviarCotizacion(event) {
    event.preventDefault();
    const nombre = document.getElementById("CotizadorNombre").value;
    const telefono = document.getElementById("CotizadorTelefono").value;
    const distribuidor = document.getElementById("Distribuidor").value;
    alert(nombre + telefono + distribuidor);
    /*
    const modelo = this.props.Modelo;
    const cajas = this.props.CantCajas;
    const pegamento = this.props.CantBaldes;
    var Mensaje =
      "El cliente " +
      nombre +
      " telefono " +
      telefono +
      " solicita cotizacion a " +
      distribuidor +
      " por " +
      cajas +
      " cajas de " +
      modelo +
      " y " +
      pegamento +
      " baldes de pegamento.";
      */
  }
  SelecionarDistribuidor() {
    var Provincia = document.getElementById("DistribuidorProvincia").value;
    const SelectDistribuidor = document.getElementById("Distribuidor");

    SelectDistribuidor.disabled = false;
    SelectDistribuidor.innerHTML = "";
    PrimeraOpcion = document.createElement("option");
    PrimeraOpcion.value = "";
    PrimeraOpcion.hidden = true;
    if (this.props.Idioma === "Por") {
      PrimeraOpcion.text = "Cidade";
    } else if (this.props.Idioma === "Eng") {
      PrimeraOpcion.text = "City";
    } else {
      PrimeraOpcion.text = "Ciudad";
    }
    SelectDistribuidor.appendChild(PrimeraOpcion);
    switch (Provincia) {
      case "Buenos Aires":
        DistribuidoresBuenosAires.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Chaco":
        DistribuidoresChaco.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Córdoba":
        DistribuidoresCordoba.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Entre Ríos":
        DistribuidoresEntreRios.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "La Pampa":
        DistribuidoresLaPampa.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Misiones":
        DistribuidoresMisiones.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Río Negro":
        DistribuidoresRioNegro.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Salta":
        DistribuidoresSalta.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Santa Fe":
        DistribuidoresSantaFe.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Canelones":
        DistribuidoresCanelones.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Montevideo":
        DistribuidoresMontevideo.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Santa Cruz":
        DistribuidoresSantaCruz.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;

      case "Río Grande del Sur":
        DistribuidoresRioGrandedelSur.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "São Paulo":
        DistribuidoresSaoPaulo.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      default:
        DistribuidoresAsuncion.map((x) => {
          var dist = document.createElement("option");
          dist.value = x;
          dist.text = x;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
    }
  }
  ShowProvincias() {
    var Pais = document.getElementById("DistribuidorPais").value;
    const SelectProvincia = document.getElementById("DistribuidorProvincia");
    SelectProvincia.disabled = false;
    SelectProvincia.innerHTML = "";
    PrimeraOpcion = document.createElement("option");
    PrimeraOpcion.value = "";
    PrimeraOpcion.hidden = true;
    if (this.props.Idioma === "Por") {
      if (Pais === "ARG") {
        PrimeraOpcion.text = "Selecione a província";
      } else if (Pais === "BRA") {
        PrimeraOpcion.text = "Selecione o estado";
      } else {
        PrimeraOpcion.text = "Selecione o departamento";
      }
    } else if (this.props.Idioma === "Eng") {
      if (Pais === "ARG") {
        PrimeraOpcion.text = "Select province";
      } else if (Pais === "BRA") {
        PrimeraOpcion.text = "Select state";
      } else {
        PrimeraOpcion.text = "Select department";
      }
    } else {
      if (Pais === "ARG") {
        PrimeraOpcion.text = "Seleccione provincia";
      } else if (Pais === "BRA") {
        PrimeraOpcion.text = "Seleccione estado";
      } else {
        PrimeraOpcion.text = "Seleccione departamento";
      }
    }
    SelectProvincia.appendChild(PrimeraOpcion);
    switch (Pais) {
      case "BRA":
        EstadosDeBrasil.map((x) => {
          var provincia = document.createElement("option");
          provincia.value = x;
          provincia.text = x;
          return SelectProvincia.appendChild(provincia);
        });
        break;
      case "BOL":
        DepartamentosBolivia.map((x) => {
          var provincia = document.createElement("option");
          provincia.value = x;
          provincia.text = x;
          return SelectProvincia.appendChild(provincia);
        });
        break;
      case "URU":
        DepartamentosUruguay.map((x) => {
          var provincia = document.createElement("option");
          provincia.value = x;
          provincia.text = x;
          return SelectProvincia.appendChild(provincia);
        });
        break;
      case "PAR":
        DepartamentosParaguay.map((x) => {
          var provincia = document.createElement("option");
          provincia.value = x;
          provincia.text = x;
          return SelectProvincia.appendChild(provincia);
        });
        break;
      default:
        ProvinciasArgentina.map((x) => {
          var provincia = document.createElement("option");
          provincia.value = x;
          provincia.text = x;
          return SelectProvincia.appendChild(provincia);
        });
        break;
    }
  }

  render() {
    return (
      <Form onSubmit={this.EnviarCotizacion}>
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
                  Pais
                </option>
                <option value="ARG">Argentina</option>
                <option value="BOL">Bolivia</option>
                <option value="BRA">Brasil</option>
                <option value="PAR">Paraguay</option>
                <option value="URU">Uruguay</option>
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
                  Provincia
                </option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control as="select" required id="Distribuidor" disabled>
                <option value="" disabled selected hidden>
                  Ciudad
                </option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
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
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                id="CotizadorTelefono"
                type="text"
                autocomplete="off"
                required
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <Button type="submit">Enviar</Button>
      </Form>
    );
  }
}

export default ContactarDistribuidor;
