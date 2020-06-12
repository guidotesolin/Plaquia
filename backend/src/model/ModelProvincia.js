var Sequelize = require("sequelize");
var sequelize = require("./Database");

var Provincia = sequelize.define(
  "provincias",
  {
    idProvincia: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    idPais: Sequelize.INTEGER,
    Provincia: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = Provincia;
