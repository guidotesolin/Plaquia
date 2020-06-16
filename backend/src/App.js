const express = require("express");
const app = express();

//Importar routes
const RouteDistribuidores = require("./routes/RouteDistribuidores");
const RouteMail = require("./routes/RouteEmail");
const RouteCotizar = require("./routes/RouteCotizador");
const RouteProvincias = require("./routes/RouteProvincias");
const RoutePaises = require("./routes/RoutePaises");
const RouteMonedas = require("./routes/RouteMonedas");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/Distribuidores", RouteDistribuidores);
app.use("/Paises", RoutePaises);
app.use("/Provincias", RouteProvincias);
app.use("/Monedas", RouteMonedas);

app.use("/", RouteMail);
app.use("/", RouteCotizar);

app.use("/", (req, res) => {
  res.send("Modulo de Backend para Plaquia revestimientos");
});

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en el puerto " + app.get("port"));
});
