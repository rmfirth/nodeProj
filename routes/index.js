var express = require('express');
var router = express.Router();
var comments = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: 'public'});
});

router.get('/comments', function(req,res) {
  res.send(comments);
});


router.post('/comments', function(req,res) {
  comments.push(req.body);
  res.send(comments);
  res.end('{"success" : "Updated Successfully", "status" :200}');
});


module.exports = router;
