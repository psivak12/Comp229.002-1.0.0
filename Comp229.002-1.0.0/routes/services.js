// Author: pavithran
// Updated on: 05-feb-2022
var express = require('express');
var router = express.Router();
let servicesController = require('../controllers/services')

//get service page
router.get('/', servicesController.home);

module.exports = router;
