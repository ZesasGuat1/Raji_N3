var express = require("express");
var router = express.Router();
var Restaurante = require("../models/Restaurante");

/* GET página do formulário de edição com os dados que estão na tabela 
  http://localhost:4000/edit/:id
*/

router.get("/edit/:id", function (req, res, next) {
  Restaurante.findById(req.params.id)
    .then((resturante) => {
      res.render("edit", {
        title: "Fórmulário de Edição",
        id: req.params.id,
        nombre: resturante.nombre,
        dir: resturante.dir,
        pts_comida: resturante.pts_comida,
        pts_servicio: resturante.pts_servicio,
      });
    })
    .catch((error) => {
      res.send("Erro ao tentar localizar o resturante. Erro: " + error);
    });
});

/**
Para realizar a edição do dado na tabela
  http://localhost:4000/edition/:id
 */

router.post("/edition/:id", function (req, res, next) {
  Restaurante.update(
    {
      nombre: req.body.nombre,
      dir: req.body.dir,
      pts_comida: req.body.pts_comida,
      pts_servicio: req.body.pts_servicio,
    }
    //{ where: { id: req.params.id } }
  )
    .then(function () {
      console.log("Resturante atualizada com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao tentar atualizar o restaurante. Erro: " + error);
    });
});

module.exports = router;
