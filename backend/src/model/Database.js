var Sequelize = require("sequelize");
const creds = require("../config/ConfigDB");

const sequelize = new Sequelize(
  "plaquia_distribuidores",
  creds.user,
  creds.pass,
  {
    dialect: "mariadb",
    host: "173.231.221.64",
    dialectOptions: { connectTimeout: 1000 }, // mariadb connector option
  }
);
module.exports = sequelize;
