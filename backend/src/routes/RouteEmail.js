var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/Config");

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
    console.log("El servidor se encuentra listo para recibir mensajes");
  }
});

router.post("/send", (req, res, next) => {
  const { name, email, phone, message } = req.body;

  var Asunto = "Nuevo contacto desde la pagina web (" + name + ")";

  contentHTML = `
        <h1> Nuevo contacto desde la pagina web:</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Mail: ${email}</li>
            <li>Telefono: ${phone}</li>
        </ul>
        <h3>Consulta:</h3>
        <p>${message}</p>
  `;

  var Correo = {
    from: "'Pagina nueva' <paginanueva@plaquia.com.ar>",
    to: "test@plaquia.com.ar", //Cambiar cuando este listo
    subject: Asunto,
    html: contentHTML,
  };

  transporter.sendMail(Correo, (err, data) => {
    if (err) {
      res.json({
        msg: "Error al enviar!",
      });
    } else {
      res.json({
        msg: "Mensaje enviado correctamente!",
      });
    }
  });
});

module.exports = router;
