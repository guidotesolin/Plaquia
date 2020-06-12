const controller = {};
var Provincia = require("../model/ModelProvincia");
var sequelize = require("../model/Database");

controller.list = async (req, res) => {
  const data = await Provincia.findAll()
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};
module.exports = controller;
