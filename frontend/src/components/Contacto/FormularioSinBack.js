import React, { Component } from "react";

var LabelNombre;
var LabelMail;
var LabelTelefono;
var LabelConsulta;
var LabelPais;
var LabelProvincia;
var LabelLocalidad;
var LabelOtro;
var Epigrafe;
var LabelBoton;
var LabelSelect;
var Enviado;
var Error;

const ProvinciasArgentina = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];
const DepartamentosUruguay = [
  "Artigas",
  "Canelones",
  "Cerro Largo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Montevideo",
  "Paysandú",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembó",
  "Treinta y Tres",
];
const DepartamentosBolivia = [
  "Trinidad",
  "Chuquisaca",
  "Cochabamba",
  "La Paz",
  "Oruro",
  "Pando",
  "Potosí",
  "Santa Cruz",
  "Tarija",
];

const EstadosDeBrasil = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahía",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso del Sur",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Río de Janeiro",
  "Río Grande del Norte",
  "Río Grande del Sur",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const DepartamentosParaguay = [
  "Alto Paraguay",
  "Alto Paraná",
  "Amambay",
  "Boquerón",
  "Caaguazú",
  "Caazapá",
  "Canindeyú",
  "Central",
  "Concepción",
  "Cordillera",
  "Guairá",
  "Itapúa",
  "Misiones",
  "Ñeembucú",
  "Paraguarí",
  "Presidente Hayes",
  "San Pedro",
];

const ServiceID = "default_service";
const TemplateID = "template_pfpTHCB3";

class ContactoSinBack extends Component {
  Iniciar() {
    if (this.props.Idioma === "Por") {
      LabelNombre = "Nome:";
      LabelMail = "Correio:";
      LabelTelefono = "Telefone:";
      LabelConsulta = "Consulte:";
      LabelPais = "País:";
      LabelProvincia = "Província:";
      LabelLocalidad = "Cidade:";
      LabelSelect = "Selecione seu país";
      LabelOtro = "Outros";
      Epigrafe = "Todos os campos são de preenchimento obrigatório";
      LabelBoton = "Envie consulta";
      Enviado =
        "A mensagem foi enviada. Em breve estaremos entrando em contato com você.";
      Error =
        "Envio de erro. Por favor, entre em contato diretamente com contacto@plaquia.com.ar.";
    } else if (this.props.Idioma === "Eng") {
      LabelNombre = "Name:";
      LabelMail = "Mail:";
      LabelTelefono = "Phone:";
      LabelPais = "Country:";
      LabelProvincia = "State:";
      LabelLocalidad = "City:";
      LabelSelect = "Select your country";
      LabelOtro = "Another";
      LabelConsulta = "Message:";
      Epigrafe = "All Labels are required";
      LabelBoton = "Send query";
      Enviado = "The message has been sent. We will be contacting you shortly.";
      Error = "Error sending. Please contact contacto@plaquia.com.ar directly.";
    } else {
      LabelNombre = "Nombre:";
      LabelMail = "Mail:";
      LabelTelefono = "Teléfono:";
      LabelPais = "País:";
      LabelProvincia = "Provincia:";
      LabelLocalidad = "Ciudad:";
      LabelConsulta = "Consulta:";
      LabelOtro = "Otro";
      LabelSelect = "Seleccione su país";
      Epigrafe = "Todos los campos son obligatorios";
      LabelBoton = "Enviar consulta";
      Enviado =
        "Su mensaje ha sido enviado. A la brevedad nos estaremos poniendo en contacto.";
      Error =
        "Error al enviar. Comuniquese directamente a contacto@plaquia.com.ar";
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    var DatosFormulario = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      country: document.getElementById("SelectPais").value,
      province: document.getElementById("SelectProvincia").value,
      city: document.getElementById("SelectCiudad").value,
    };
    window.emailjs
      .send(ServiceID, TemplateID, DatosFormulario)
      .then((res) => {
        this.resetForm();
        this.mostrarMensaje();
      })
      .catch((err) => alert(Error));
  }

  resetForm() {
    document.getElementById("FormularioContacto").reset();
  }

  mostrarMensaje() {
    document.getElementById("MensajeEnviado").style.display = "block";
  }

  render() {
    this.Iniciar();
    return (
      <div>
        <form
          id="FormularioContacto"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div class="form-row">
            <div class="col">
              <div className="form-group">
                <label for="name">{LabelNombre}</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label for="email">{LabelMail}</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <label for="phone">{LabelTelefono}</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>
            </div>
          </div>
          <p>Ubicacion</p>
          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <select class="form-control" id="SelectPais" required>
                  <option value="" disabled selected hidden>
                    {LabelSelect}
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Otro">{LabelOtro}</option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <select class="form-control" id="SelectProvincia" disabled>
                  <option selected>Provincia</option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="SelectCiudad"
                  placeholder="Ciudad"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="message">{LabelConsulta}</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              required
            ></textarea>
          </div>
          <small class="form-text text-muted">{Epigrafe}</small>
          <button
            id="BotonEnviarConsulta"
            type="submit"
            className="btn btn-primary btn-block"
          >
            {LabelBoton}
          </button>
        </form>
        <div id="MensajeEnviado" style={{ display: "none" }}>
          <br />
          <h5>{Enviado}</h5>
          <br />
        </div>
      </div>
    );
  }
}

export default ContactoSinBack;
