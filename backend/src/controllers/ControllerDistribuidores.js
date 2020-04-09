const controller = {};
var Distribuidor = require("../model/ModelDistribuidor");
var sequelize = require("../model/Database");

controller.list = async (req, res) => {
  const data = await Distribuidor.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};
module.exports = controller;
