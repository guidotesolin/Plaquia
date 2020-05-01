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
  const { name, email, message } = req.body;

  contentHTML = `
        <h1> Datos de contacto:</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Mail: ${email}</li>
        </ul>
        <p>Mensaje: ${message}</p>
  `;

  var Correo = {
    from: "'Pagina nueva' <paginanueva@plaquia.com.ar>",
    to: "test@plaquia.com.ar", //Change to email address that you want to receive messages on
    subject: "Nuevo contacto desde la pagina web",
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
