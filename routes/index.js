var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function (req, res, next) {
  Post.find({}, function (err, docs) {
    if (err) {
      res.json(err);
    }
    else {
      res.render('blog/index', { post: docs.reverse(), title: 'blogger' });
    }
  })
});


router.get('/newpost', function (req, res, next) {
  res.render('blog/newpost', { title: 'post page' });
})



router.post('/newpost', function (req, res, next) {
  if (!req.body.title || !req.body.content) {
    return res.redirect('/');
  }

  var post = new Post({
    title: req.body.title,
    content: req.body.content,
    timestamp: req.body.timestamp
  });

  post.save(function (err) {
    res.redirect('/');
  })
  console.log(req.body.title);
  console.log(req.body.timestamp);
});




module.exports = router;
