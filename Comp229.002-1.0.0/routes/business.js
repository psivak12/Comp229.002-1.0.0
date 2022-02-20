let express = require('express');
let router = express.Router();
let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

router.get('/list',requireAuth, businessController.list);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, businessController.displayAddPage);
/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, businessController.processAddPage);

// Routers for edit
router.get('/edit/:id', requireAuth, businessController.displayEditPage);
router.post('/edit/:id', requireAuth, businessController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;