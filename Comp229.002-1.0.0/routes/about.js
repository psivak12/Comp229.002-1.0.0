// Author: pavithran
// Updated on: 05-feb-2022

var express = require('express');
var router = express.Router();
let aboutController = require('../controllers/about')

//get about page
router.get('/', aboutController.home);

module.exports = router;
