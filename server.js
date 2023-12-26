const express = require("express");

const server = express();

const cursos = ["JavaScript", "React", "Typescript", "Nodejs", "Bootstrap", "AWS"];

server.use(express.json())
//CRUD

server.get("/curso/:index", (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index])

})

const checkName = (req, res, next) => {
  if (!req.body.nome) {
    return res.status(400).json({ error: "Nome do curso é obrigatório" })
  }

  return next();
}

const checkIndex = (req, res, next) => {
  if (!cursos[req.params.index]) {
    return res.status(400).json({ error: "O curso não existe!!" })
  }
  return next()
}

// criar curso

server.post("/curso", checkName, (req, res) => {
  const { nome } = req.body;
  cursos.push(nome);

  return res.json({ message: "Curso adicionado com sucesso" })
})


// listar todos os cursos
server.get("/curso", (req, res) => {
  return res.json(cursos)
})


// atualizar um curso
server.put("/curso/:index", checkIndex, checkName, (req, res) => {
  const { index } = req.params;
  const { nome } = req.body;
  cursos[index] = nome;

  return res.json({ message: "Curso atualizado com sucesso" })
})

// deletar Curso

server.delete("/curso/:index", checkIndex, (req, res) => {
  const { index } = req.params;
  cursos.slice(index, 1);

  return res.json({ message: "Curso deletado com sucesso" })
})



server.listen(3000);