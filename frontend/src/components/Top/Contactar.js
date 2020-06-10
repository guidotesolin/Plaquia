import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

// Provincias con distribuidores
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
// Distribuidores separados por provincias
const DistribuidoresBuenosAires = [
  { Localidad: "Algarrobo", Mail: "algarrobo@rangocomercial.com.ar" },
  { Localidad: "Benavidez", Mail: "a.cuello@outlook.com" },
  { Localidad: "Capital Federal", Mail: "distribmani@gmail.com" },
  { Localidad: "Caseros", Mail: "rmartinez@galvylam.com" },
  { Localidad: "Ciudadela", Mail: "asciudadela@almacenseco.com.ar" },
  { Localidad: "Hilario", Mail: "ascasubi@rangocomercial.com.ar" },
  { Localidad: "Ituzaingo", Mail: "asituzaingo@almacenseco.com.ar" },
  { Localidad: "Médanos", Mail: "algarrobo@rangocomercial.com.ar" },
  { Localidad: "Patagones", Mail: "villalonga@rangocomercial.com.ar" },
  { Localidad: "Rauch", Mail: "fmateo56@yahoo.com" },
  { Localidad: "Tandil", Mail: "fmateo56@yahoo.com " },
];
const DistribuidoresChaco = [
  { Localidad: "Resistencia", Mail: "ltortul@fsceramicos.com" },
  { Localidad: "Roque Saenz Peña", Mail: "mirtazaj@hotmail.com" },
];
const DistribuidoresCordoba = [
  { Localidad: "Rio Cuarto", Mail: "ltortul@fsceramicos.com" },
];
const DistribuidoresEntreRios = [
  { Localidad: "Paraná", Mail: "administracionparana@seccoplac.com.ar" },
];
const DistribuidoresLaPampa = [
  { Localidad: "General Pico", Mail: "generalpico@aisplac.com.ar" },
  { Localidad: "La Adela", Mail: "medanos@rangocomercial.com.ar" },
];
const DistribuidoresMisiones = [
  { Localidad: "San Vicente", Mail: "maderasyplacas@hotmail.com" },
];
const DistribuidoresRioNegro = [
  { Localidad: "Río Colorado", Mail: "riocolorado@rangocomercial.com.ar" },
];
const DistribuidoresSalta = [
  { Localidad: "Salta", Mail: "seccoplacsalta@gmail.com" },
];
const DistribuidoresSantaFe = [
  { Localidad: "Calchaquí", Mail: "contacto@maconfer.com.ar" },
  { Localidad: "Reconquista", Mail: "reconquista@seccomat.com.ar" },
  { Localidad: "San Jorge", Mail: "mauriciolsapino@gmail.com" },
  { Localidad: "Santa Fe", Mail: "santafe@seccoplac.com.ar" },
];
const DistribuidoresSantaCruz = [
  {
    Localidad: "Santa Cruz de la Sierra",
    Mail: "seccoplacbolivia@seccoplac.com.ar",
  },
];
const DistribuidoresRioGrandedelSur = [
  { Localidad: "Porto Alegre", Mail: "info@plaquia.com.ar" },
];
const DistribuidoresSaoPaulo = [
  { Localidad: "São Paulo", Mail: "info@plaquia.com.ar" },
];
const DistribuidoresAsuncion = [
  { Localidad: "Asunción", Mail: "nico@januca.com.py" },
];
const DistribuidoresCanelones = [
  { Localidad: "Canelones", Mail: "fbesino@castro.com.uy" },
];
const DistribuidoresMontevideo = [
  { Localidad: "Montevideo", Mail: "info@qualicer.com" },
];

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

  EnviarCotizacion(event) {
    event.preventDefault();
    const service_id = "default_service";
    const template_id = "cotizadorplaquia";
    const nombre = document.getElementById("CotizadorNombre").value;
    const telefono = document.getElementById("CotizadorTelefono").value;
    const mail = document.getElementById("Distribuidor").value;

    var template_params = {
      EnviarA: mail,
      nombre: nombre,
      telefono: telefono,
      superficie: Superficie,
      modelo: Modelo,
      precio: Precio,
      moneda: Moneda,
      cajas: Cajas,
      baldes: Baldes,
    };
    // Quitar alerta al terminar
    /*
    alert(
      " EnviarA: " +
        template_params.EnviarA +
        " nombre: " +
        template_params.nombre +
        " telefono: " +
        template_params.telefono +
        " superficie: " +
        template_params.superficie +
        " modelo: " +
        template_params.modelo +
        " precio: " +
        template_params.precio +
        " moneda: " +
        template_params.moneda +
        " cajas: " +
        template_params.cajas +
        " baldes: " +
        template_params.baldes
    );
    */
    window.emailjs
      .send(service_id, template_id, template_params)
      .then((res) => {
        alert(MensajeEnviado);
      })
      .catch((err) => alert(Error));
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
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Chaco":
        DistribuidoresChaco.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Córdoba":
        DistribuidoresCordoba.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Entre Ríos":
        DistribuidoresEntreRios.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "La Pampa":
        DistribuidoresLaPampa.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Misiones":
        DistribuidoresMisiones.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Río Negro":
        DistribuidoresRioNegro.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Salta":
        DistribuidoresSalta.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Santa Fe":
        DistribuidoresSantaFe.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Canelones":
        DistribuidoresCanelones.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Montevideo":
        DistribuidoresMontevideo.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "Santa Cruz":
        DistribuidoresSantaCruz.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;

      case "Río Grande del Sur":
        DistribuidoresRioGrandedelSur.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      case "São Paulo":
        DistribuidoresSaoPaulo.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
          return SelectDistribuidor.appendChild(dist);
        });
        break;
      default:
        DistribuidoresAsuncion.map((x) => {
          var dist = document.createElement("option");
          dist.value = x.Mail;
          dist.text = x.Localidad;
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
    this.Iniciar();
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
                  {LabelPais}
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
                  {LabelProvincia}
                </option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control as="select" required id="Distribuidor" disabled>
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
  }
}

export default ContactarDistribuidor;
