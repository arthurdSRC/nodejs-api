const express = require("express");

const server = express();


server.get("/teste", (req, res) => {
  const nome = req.query.nome;
  return res.json(`${nome}`)
})

server.get("/teste/:id", (req, res) => {
  const id = req.params.id;
  return res.json(`${id}`)
})

server.listen(3000);