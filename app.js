const express = require("express");
const hbs = require("hbs");
require('dotenv').config()

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir Contenido Estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Douglas Bravo",
    titulo: "Curso de Node",
  });

});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Douglas Bravo",
    titulo: "Curso de Node",
  });

});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Douglas Bravo",
    titulo: "Curso de Node",
  });

});
app.get("/generic", (req, res) => {
  res.sendFile("public/generic.html", { root: __dirname });
});

app.get("/elements", (req, res) => {
  res.sendFile("public/elements.html", { root: __dirname });
});

app.get("*", (req, res) => {
  res.sendFile("public/404.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
