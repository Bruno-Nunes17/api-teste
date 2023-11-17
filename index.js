const express = require("express");
const cors = require("cors");
const photosRoutes = require("./src/routes/photoRoutes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/photos", photosRoutes);

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "API online 😎" });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
