const fs = require("fs");
const Photos = require("../models/PhotoModel")

exports.create = (req, res) => {
  res.status(200).json({ message: "rota create" });
};
exports.getAll = (req, res) => {
  res.status(200).json({ message: "rota getall" });
};
exports.remove = (req, res) => {
  res.status(200).json({ message: "rota remove" });
};
