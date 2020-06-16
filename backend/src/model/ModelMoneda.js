var Sequelize = require("sequelize");
var sequelize = require("./Database");

var Precio = sequelize.define(
  "precios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    Habilitar: Sequelize.INTEGER,
    Moneda: Sequelize.STRING,
    Denominacion: Sequelize.STRING,
    PrecioCaja: Sequelize.FLOAT,
    PrecioPegamento: Sequelize.FLOAT,
  },
  {
    timestamps: false,
  }
);

module.exports = Precio;
