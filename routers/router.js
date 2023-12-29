const express = require('express');
const router = express.Router();
const allPokemons = require('../controllers/controller');

router.route('/').get(allPokemons);

module.exports = router;