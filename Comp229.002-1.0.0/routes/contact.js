// Author: pavithran
// Updated on: 05-feb-2022

var express = require('express');
var router = express.Router();
let contactController = require('../controllers/contact')

//get contact page
router.get('/', contactController.home);

module.exports = router;
