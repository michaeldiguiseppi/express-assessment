var express = require('express');
var router = express.Router();

router.get('/movies', function(req, res, next) {
  res.render('movies/index');
});

module.exports = router;
