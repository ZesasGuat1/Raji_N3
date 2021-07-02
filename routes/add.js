var express = require("express");
var router = express.Router();
var Restaurante = require("../models/Restaurante");

/* GET página do formulário de adição 
  http://localhost:4000/form
*/

router.get("/form", function (req, res, next) {
  res.render("add", { title: "Fórmulário" });
});

/**
  http://localhost:4000/add
 */

router.post("/add", function (req, res, next) {
  Restaurante.create({
    nombre: req.body.nombre,
    dir: req.body.dir,
    pts_comida: req.body.pts_comida,
    pts_servicio: req.body.pts_servicio,
  })
    .then(function () {
      console.log("Restaurante cadastrado com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao cadastrar o resturante. Erro: " + error);
    });
});

module.exports = router;
