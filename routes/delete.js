var express = require("express");
var router = express.Router();
var Restaurante = require("../models/Restaurante");

router.get("/delete/:id", function (req, res, next) {
  Restaurante.deleteOne({ _id: req.params.id })
    .then(function () {
      res.redirect("/list");
    })
    .catch((error) => {
      res.send("Erro ao excluir o resturante. Erro: " + error);
    });
});

module.exports = router;
