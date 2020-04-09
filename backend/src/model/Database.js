var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "plaquia_distribuidores",
  "plaquia_admin",
  "BsdlFV+SAw1@",
  {
    dialect: "mariadb",
    host: "173.231.221.64",
    dialectOptions: { connectTimeout: 1000 }, // mariadb connector option
  }
);
module.exports = sequelize;
