const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;

app.engine("handlebars", handlebars({defaultLayout: "main"}));

app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/consultar", (req, res) => {
    res.render("consultar");
});

app.get("/atualizar", (req, res) => {
    res.render("atualizar");
});

app.listen("8081",() => {
    console.log("Servidor Ativo!");
});