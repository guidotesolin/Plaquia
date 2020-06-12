const controller = {};
var Pais = require("../model/ModelPais");
var sequelize = require("../model/Database");

controller.list = async (req, res) => {
  const data = await Pais.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};
module.exports = controller;
