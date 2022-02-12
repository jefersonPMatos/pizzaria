const express = require('express');

const ehAdmin = require('../middlewares/usuarioEhadmin');
const uploadFotos = require('../middlewares/uploadFotos');

const router = express.Router();


router.use(usuarioEhAdmin);

router.get('/cadastrar', (req, res) => {
    res.send('ok')
});

router.post('/cadastrar', uploadFotos, (req, res) => {
    res.send('ok')
});

router.get('/lista', (req, res) => {
    res.send('lista')
});

module.exports = router;