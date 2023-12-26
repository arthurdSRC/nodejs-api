const express = require("express");

const server = express();

const cursos = ["JavaScript", "React", "Typescript", "Nodejs", "Bootstrap", "AWS"];

server.get("/teste", (req, res) => {
  const nome = req.query.nome;
  return res.json(`${nome}`)
})

server.get("/teste/:id", (req, res) => {
  const id = req.params.id;
  return res.json(`${id}`)
})

server.get("/curso/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index])

})






server.listen(3000);