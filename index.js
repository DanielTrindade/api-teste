const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/',(req,res) => {
    res.send('a conexão foi estabelecida com sucesso!');
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});