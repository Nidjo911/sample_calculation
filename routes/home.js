const express = require('express');
const router = express.Router();
const kucnaKontrola = require('../controllers/home');

router.get('/', kucnaKontrola.getHomePage);


// do this via controller
module.exports = router;