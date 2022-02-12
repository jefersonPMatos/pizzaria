const express = require('express');

const ehAdmin = require('../middlewares/usuarioEhadmin')

const router = express.Router();


router.use(usuarioEhAdmin);

router.get('/cadastrar', (req, res) => {
    res.send('ok')
});

router.post('/cadastrar', (req, res) => {
    res.send('ok')
});

router.get('/lista', (req, res) => {
    res.send('lista')
});

module.exports = router;