// Author: pavithran
// Updated on: 05-feb-2022

var express = require('express');
var router = express.Router();
let projectsController = require('../controllers/projects')

//get project page
router.get('/', projectsController.home);

module.exports = router;
