// Author: pavithran
// Updated on: 05-feb-2022

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* get home page. */
router.get('/', indexController.home);

module.exports = router;
