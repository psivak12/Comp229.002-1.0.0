exports.home = function(req, res, next) {
    res.render('projects', { title: 'MY PROJECTS' });
}

