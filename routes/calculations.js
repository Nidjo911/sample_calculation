const express = require('express');
const router = express.Router();
const kontrolerZaKalkulacije = require('../controllers/calculation');

router.get('/performTestSampleCalculations', kontrolerZaKalkulacije.dohvatiMiKalkulacije);
module.exports = router;