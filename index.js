const express = require('express');

const app = express();


app.get('/teste', (req, res) => res.send('Chegou aqui'))

app.listen(5000, () => console.log('O servidor está funcionando!'));