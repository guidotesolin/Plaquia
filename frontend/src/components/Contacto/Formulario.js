import React, { Component } from "react";
import axios from "axios";

var PrimeraOpcion;
var LabelNombre;
var LabelMail;
var LabelTelefono;
var LabelConsulta;
var LabelUbicacion;
var LabelProvincia;
var LabelLocalidad;
var LabelOtro;
var Epigrafe;
var LabelBoton;
var LabelSelect;
var LabelOtroPais;
var Enviado;
var Error;

const ListaPaises = ["Argentina", "Bolivia", "Brasil", "Paraguay", "Uruguay"];

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Provincias: [],
    };
    this.Iniciar();
    this.getProvincias();
  }
  //.get("http://localhost:3000/provincias/list")
  getProvincias() {
    axios
      .get("https://plaquia.herokuapp.com/provincias/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ Provincias: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Iniciar() {
    if (this.props.Idioma === "Por") {
      LabelNombre = "Nome:";
      LabelMail = "Correio:";
      LabelTelefono = "Telefone:";
      LabelConsulta = "Consulte:";
      LabelUbicacion = "Localização:";
      LabelProvincia = "Província";
      LabelLocalidad = "Cidade";
      LabelSelect = "Selecione seu país";
      LabelOtro = "Outro país";
      Epigrafe = "Todos os campos são de preenchimento obrigatório";
      LabelBoton = "Envie consulta";
      Enviado =
        "A mensagem foi enviada. Em breve estaremos entrando em contato com você.";
      Error =
        "Envio de erro. Por favor, entre em contato diretamente com contacto@plaquia.com.ar.";
      LabelOtroPais = "Indique a sua localização no campo de mensagens";
    } else if (this.props.Idioma === "Eng") {
      LabelNombre = "Name:";
      LabelMail = "Mail:";
      LabelTelefono = "Phone:";
      LabelUbicacion = "Location:";
      LabelProvincia = "State";
      LabelLocalidad = "City";
      LabelSelect = "Select your country";
      LabelOtro = "Another country";
      LabelConsulta = "Message:";
      Epigrafe = "All Labels are required";
      LabelBoton = "Send query";
      Enviado = "The message has been sent. We will be contacting you shortly.";
      Error = "Error sending. Please contact contacto@plaquia.com.ar directly.";
      LabelOtroPais = "Indicate your location in the message field";
    } else {
      LabelNombre = "Nombre:";
      LabelMail = "Mail:";
      LabelTelefono = "Teléfono:";
      LabelUbicacion = "Ubicación:";
      LabelProvincia = "Provincia";
      LabelLocalidad = "Ciudad";
      LabelConsulta = "Consulta:";
      LabelOtro = "Otro país";
      LabelSelect = "Seleccione su país";
      Epigrafe = "Todos los campos son obligatorios";
      LabelBoton = "Enviar consulta";
      Enviado =
        "Su mensaje ha sido enviado. A la brevedad nos estaremos poniendo en contacto.";
      Error =
        "Error al enviar. Comuniquese directamente a contacto@plaquia.com.ar";
      LabelOtroPais = "Indique su localización en el campo de mensaje";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    var IDcountry = document.getElementById("SelectPais").value;
    IDcountry = parseInt(IDcountry) - 1;
    const country = ListaPaises[IDcountry];
    const province = document.getElementById("SelectProvincia").value;
    const city = document.getElementById("SelectCiudad").value;
    axios({
      method: "POST",
      //url: "http://localhost:3000/send",
      url: "https://plaquia.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        phone: phone,
        country: country,
        province: province,
        city: city,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        this.resetForm();
        this.mostrarMensaje();
      } else if (response.data.msg === "fail") {
        alert(Error);
      }
    });
  }

  resetForm() {
    document.getElementById("FormularioContacto").reset();
  }

  mostrarMensaje() {
    document.getElementById("MensajeEnviado").style.display = "block";
  }

  HabilitarCiudad() {
    const SelectCiudad = document.getElementById("SelectCiudad");
    SelectCiudad.value = "";
    SelectCiudad.placeholder = LabelLocalidad;
    SelectCiudad.disabled = false;
  }

  OtroPais() {
    alert(LabelOtroPais);
    const SelectProvincia = document.getElementById("SelectProvincia");
    const SelectCiudad = document.getElementById("SelectCiudad");
    SelectProvincia.disabled = true;
    SelectCiudad.disabled = true;
    SelectProvincia.innerHTML = "";
    var OtroPaisProvincia = document.createElement("option");
    OtroPaisProvincia.value = "Otro pais";
    OtroPaisProvincia.text = LabelOtro;
    SelectProvincia.appendChild(OtroPaisProvincia);
    SelectCiudad.value = LabelOtro;
    SelectCiudad.placeholder = LabelOtro;
  }

  MostrarProvincias() {
    var Pais = document.getElementById("SelectPais").value;
    const SelectProvincia = document.getElementById("SelectProvincia");
    const Provincias = this.state.Provincias;
    SelectProvincia.disabled = false;
    // Este IF es para difrenciar la division politica de los paises
    SelectProvincia.innerHTML = "";
    PrimeraOpcion = document.createElement("option");
    PrimeraOpcion.value = "";
    PrimeraOpcion.hidden = true;
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
    if (Pais === "6") {
      this.OtroPais();
    }
    // Cargar provincias
    Provincias.map((x) => {
      if (Pais == x.idPais) {
        var provincia = document.createElement("option");
        provincia.value = x.Provincia;
        provincia.text = x.Provincia;
        return SelectProvincia.appendChild(provincia);
      }
    });
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
          <p>{LabelUbicacion}</p>
          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <select
                  class="form-control"
                  id="SelectPais"
                  required
                  onChange={this.MostrarProvincias.bind(this)}
                >
                  <option value="" disabled selected hidden>
                    {LabelSelect}
                  </option>
                  <option value="1" label="Argentina">
                    Argentina
                  </option>
                  <option value="2" label="Bolivia">
                    Bolivia
                  </option>
                  <option value="3" label="Brasil">
                    Brasil
                  </option>
                  <option value="4" label="Paraguay">
                    Paraguay
                  </option>
                  <option value="5" label="Uruguay">
                    Uruguay
                  </option>
                  <option value="6" label={LabelOtro}>
                    Otro
                  </option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <select
                  class="form-control"
                  id="SelectProvincia"
                  disabled
                  onChange={this.HabilitarCiudad.bind(this)}
                >
                  <option selected>{LabelProvincia}</option>
                </select>
              </div>
            </div>

            <div class="col">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="SelectCiudad"
                  placeholder={LabelLocalidad}
                  required
                  disabled
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

export default Formulario;
