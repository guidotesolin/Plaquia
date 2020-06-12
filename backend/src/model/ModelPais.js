var Sequelize = require("sequelize");
var sequelize = require("./Database");

var Pais = sequelize.define(
  "paises",
  {
    idPais: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    Pais: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = Pais;
