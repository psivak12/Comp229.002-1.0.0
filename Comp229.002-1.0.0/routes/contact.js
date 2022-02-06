var express = require('express');
var router = express.Router();
let contactController = require('../controllers/contact')

router.get('/', contactController.home);

module.exports = router;
