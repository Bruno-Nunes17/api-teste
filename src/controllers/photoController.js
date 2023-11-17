const fs = require("fs");
const Photos = require("../models/PhotoModel");
const { log } = require("console");

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
    console.log(error);
    res.status(500).json({ message: "Erro ao salvar imagem." });
  }
};
exports.getAll = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json({ photos });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar imagem." });
  }
};
exports.remove = async (req, res) => {
  res.status(200).json({ message: "rota remove" });
};
