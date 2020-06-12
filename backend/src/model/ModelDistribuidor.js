var Sequelize = require("sequelize");
var sequelize = require("./Database");

var Distribuidor = sequelize.define(
  "distribuidores",
  {
    idDistribuidor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProvincia: Sequelize.INTEGER,
    Localidad: Sequelize.STRING,
    Direccion: Sequelize.STRING,
    Telefono: Sequelize.STRING,
    Mail: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = Distribuidor;
