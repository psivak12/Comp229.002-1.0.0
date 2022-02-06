var express = require('express');
var router = express.Router();
let aboutController = require('../controllers/about')

router.get('/', aboutController.home);

module.exports = router;
