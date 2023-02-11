const express = require("express");
const usersRoutes = require("./app/routes/userRoutes.js");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("a conexão foi estabelecida com sucesso!");
});

app.use('/', usersRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
