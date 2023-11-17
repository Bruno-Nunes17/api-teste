const fs = require("fs");
const Photos = require("../models/PhotoModel")

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const { file } = req;

    const photo = new Photos({
      name,
      src: file.path,
    });

    await photo.save();

    res.status(200).json({ photo, message: "Imagen salva com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar imagem." });
  }
};
exports.getAll = (req, res) => {
  res.status(200).json({ message: "rota getall" });
};
exports.remove = (req, res) => {
  res.status(200).json({ message: "rota remove" });
};
