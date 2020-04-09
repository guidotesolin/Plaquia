const express = require("express");
const router = express.Router();
const Controlador = require("../controllers/ControllerDistribuidores");

router.get("/list", Controlador.list);

module.exports = router;
