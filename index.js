const express = require('express');
const app = express();

import servico from './servico/servico.js';

app.get('/', (req, res) => {
    let ano = req.query.ano;

    let mensagem = servico.buscarFatoPorAno(ano);

    res.json({mensagem: mensagem});
});

app.listen(8080, () => {
    let data = new Date();
    console.log(`Servidor node iniciado em ${data}`);
});