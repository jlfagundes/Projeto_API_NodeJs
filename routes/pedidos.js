const express = require('express');
const router = express.Router();

// Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Usando GET dentro da rota de pedidos'
    });
});

// Inseri um pedidos
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando POST dentro da rota de pedidos'
    });
});

// Retorno um pedidos com id específico
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos;

    if (id === 'especial') {
        res.status(200).send({
            message: 'Retorna usando o get de um pedidos exclusivo',
            id: id
        });
    } else {
        res.status(200).send({
            message: 'Voce passou um ID'
        });
    };
});

// Altera um pedidos
router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando PATCH dentro da rota de pedidos'
    });
});

// Deleta um pedidos
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando DELETE dentro da rota de pedidos'
    });
});


module.exports = router
