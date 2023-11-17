const express = require("express");
const photoController = require("../controllers/photoController")
const upload = require("../configs/multer");

const route = express.Router();

route.post("/", upload.single("file"), photoController.create)
route.get("/", photoController.getAll)
route.delete("/:id", photoController.remove)

module.exports = route;