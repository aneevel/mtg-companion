const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET decks endpoint');
});

router.get('/:id', (req, res) => {
    res.send(`GET decks endpoint for ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send('POST decks endpoint');
});

router.patch('/:id', (req, res) => {
    res.send(`PATCH decks endpoint for ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`DELETE decks endpoint for ${req.params.id}`);
})

module.exports = router;