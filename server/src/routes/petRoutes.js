const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/petlist', petController.getPets);

module.exports = router;