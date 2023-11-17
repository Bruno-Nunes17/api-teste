const express = require("express");
const photoController = require("../controllers/photoController")
const route = express.Router();

route.post("/", photoController.create)
route.get("/", photoController.getAll)
route.delete("/", photoController.remove)

module.exports = route;