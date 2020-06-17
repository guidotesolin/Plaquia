var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/ConfigMail");

const transporter = nodemailer.createTransport({
  host: "mail.plaquia.com.ar",
  port: 587,
  secure: false,
  auth: {
    user: creds.user,
    pass: creds.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(
      "El servidor se encuentra listo para recibir pedidos de cotizacion"
    );
  }
});

router.post("/cotizar", (req, res, next) => {
  const {
    EnviarA,
    nombre,
    telefono,
    superficie,
    modelo,
    precio,
    preciom2,
    cotizacionCajas,
    cotizacionPegamento,
    moneda,
    cajas,
    baldes,
  } = req.body;

  var Asunto = "Nuevo pedido de cotización: (" + nombre + ")";

  contentHTML = `
        <h1> Nuevo pedido de cotización en Plaquia.com.ar:</h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Telefono: ${telefono}</li>
            <li>Cotización pedida a: ${EnviarA}</li>
        </ul>
        <h3>Pedido cotizado:</h3>
        <ul>${superficie} m2 de placas modelo ${modelo} (${preciom2} el m2)</ul>
        <ul>Por un precio de ${precio} ${moneda} (${moneda}${cotizacionCajas} en cajas y ${moneda}${cotizacionPegamento} en pegamento)</ul>
        <ul>Cajas de Plaquia: ${cajas}</ul> 
        <ul>Baldes de pegamento: ${baldes}</ul>
  `;

  var Correo = {
    from: "'Pagina nueva' <paginanueva@plaquia.com.ar>",
    to: EnviarA,
    bcc: "contacto@plaquia.com.ar",
    subject: Asunto,
    html: contentHTML,
  };

  transporter.sendMail(Correo, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

module.exports = router;
