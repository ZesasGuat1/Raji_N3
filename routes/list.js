var express = require("express");
var router = express.Router();
var Restaurante = require("../models/Restaurante");



router.get("/list", function (req, res, next) {
  Restaurante.find().then(function (restaurante) {
    res.render("list", { title: "Listagem de resturantes", restaurante: restaurante });
    console.log(restaurante);
  });
});

module.exports = router;
