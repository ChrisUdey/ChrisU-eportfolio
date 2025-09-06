var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Welcome to my e-portfolio',
        aboutMe: "My name is Chris Udey I am 31 years old",
        picture: "/images/profile.jpg"

      });
});

router.get('/aboutMe', function(req, res, next) {
    res.render('aboutMe', {
        title: 'About Me - Chris Udey',
    });
});


router.get('/projects', function(req, res) {
    res.render('projects', {
        title: 'Projects - Chris Udey',
    });
});

router.get('/skills', function(req, res) {
    res.render('skills', {
        title: 'Skills - Chris Udey',
    });
});
module.exports = router;
