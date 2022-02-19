const express = require('express');

const app = express();

const rotaProdutos = require('./routes/produtos');

app.use('/produtos', rotaProdutos);

app.use('/', (req, res, next) => {
    res.status(200).send({
        message: "ok, deu certo"
    });
})

module.exports = app
