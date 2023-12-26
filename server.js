const express = require("express");

const server = express();

server.get("/teste", (req, res) => res.json("deu tudo certo"))

server.listen(3000, () => console.log("server on !!"))