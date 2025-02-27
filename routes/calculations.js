const express = require('express');
const router = express.Router();
const kontrolerZaKalkulacije = require('../controllers/calculation');

router.get('/performTestSampleCalculations', kontrolerZaKalkulacije.dohvatiMiKalkulacije);
router.get('/getMeANumber', kontrolerZaKalkulacije.dohvatiMiBroj);
router.get('/getMeALuckyNumber', kontrolerZaKalkulacije.dohvatiMiSretanBroj);

module.exports = router;