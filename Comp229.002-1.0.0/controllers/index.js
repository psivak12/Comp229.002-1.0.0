exports.home = function(req, res, next) {
    res.render('index', { title: 'HOME' ,
    userName: req.user ? req.user.username : ''});
}

