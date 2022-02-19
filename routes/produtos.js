const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Usando GET dentro da rota de produtos'
    });
});

// Inseri um produto
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando POST dentro da rota de produtos'
    });
});

// Retorno um produto com id específico
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if (id === 'especial') {
        res.status(200).send({
            message: 'Retorna usando o get de um produto exclusivo',
            id: id
        });
    } else {
        res.status(200).send({
            message: 'Voce passou um ID'
        });
    };
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando PATCH dentro da rota de produtos'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Usando DELETE dentro da rota de produtos'
    });
});


module.exports = router
