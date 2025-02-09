
const express = require('./express');
const router = express.Router;


router.get('/performTestSampleCalculations', calculationController.getCalculation);