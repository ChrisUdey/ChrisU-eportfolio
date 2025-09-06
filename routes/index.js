var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Welcome to my e-portfolio',
        aboutMe: "My name is Chris Udey",
        picture: "/images/profile.jpg"

      });
});

router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'About Me',
    });
});


router.get('/projects', function(req, res) {
    res.render('projects', {
        title: 'Projects',
    });
});

router.get('/skills', function(req, res) {
    res.render('skills', {
        title: 'Skills',
    });
});

router.get('/contact', function(req, res) {
    res.render('contact', {
        title: 'Contact',
    })
})
module.exports = router;
