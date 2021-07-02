const mongoose = require("mongoose");

const Restaurante = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      required: true,
    },
    pts_comida: {
      type: String,
      required: true,
    },
    pts_servicio: {
      type: String,
      required: true,
    },
  },
  { collection: "restaurantes" }
);

module.exports = mongoose.model("Restaurante", Restaurante);
