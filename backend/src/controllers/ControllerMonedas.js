const controller = {};
var Precios = require("../model/ModelMoneda");
var sequelize = require("../model/Database");

controller.list = async (req, res) => {
  const data = await Precios.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};
module.exports = controller;
