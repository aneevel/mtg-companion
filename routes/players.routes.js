const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET players endpoint');
});

router.post('/', (req, res) => {
    res.send('POST players endpoint');
});

router.patch('/:id', (req, res) => {
    res.send(`PATCH players endpoint with ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`DELETE players endpoint with ${req.params.id}`);
});

module.exports = router;