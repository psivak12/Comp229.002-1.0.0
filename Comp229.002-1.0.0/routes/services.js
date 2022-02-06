var express = require('express');
var router = express.Router();
let servicesController = require('../controllers/services')

router.get('/', servicesController.home);

module.exports = router;
