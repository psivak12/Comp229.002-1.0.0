var express = require('express');
var router = express.Router();
let projectsController = require('../controllers/projects')

router.get('/', projectsController.home);

module.exports = router;
