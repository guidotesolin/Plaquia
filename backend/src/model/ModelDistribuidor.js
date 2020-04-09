var Sequelize = require("sequelize");
var sequelize = require("./Database");

var Distribuidor = sequelize.define(
  "distribuidor",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pais: Sequelize.STRING,
    provincia: Sequelize.STRING,
    localidad: Sequelize.STRING,
    direccion: Sequelize.STRING,
    telefono: Sequelize.BIGINT,
  },
  {
    timestamps: false,
  }
);

module.exports = Distribuidor;
