const express = require('express');
const router = express.Router();


const usuarioController = require('../controllers/usuarioController');

router.get('/registro',usuarioController.list);

router.post('/guardar', usuarioController.guardar);

module.exports = router;