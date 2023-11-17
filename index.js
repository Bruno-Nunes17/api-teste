const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const photosRoutes = require("./src/routes/photoRoutes");

require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.DBKEY)
  .then(() => {
    app.emit("ready");
  })
  .catch((e) => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/photos", photosRoutes);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({ message: "API online 😎" });
});
app.on("ready", () => {
  app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
  });
});
