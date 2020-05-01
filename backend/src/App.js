const express = require("express");
const app = express();

//Importar routes de distribuidores
const RouteDistribuidores = require("./routes/RouteDistribuidores");
const RouteMail = require("./routes/RouteEmail");

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

app.use("/", RouteMail);

app.use("/", (req, res) => {
  res.send("Hello World form NodeJS express.");
});

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
