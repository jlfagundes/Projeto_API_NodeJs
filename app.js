const express = require('express');

const app = express();

const morgan = require('morgan');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

// Quando n?o encontra rota entra aqui
app.use((req, res, next) => {
    const erro = new Error('Nao encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    });
});

app.use('/', (req, res, next) => {
    res.status(200).send({
        message: "ok, deu certo"
    });
});

module.exports = app
