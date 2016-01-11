var express = require('express');
var router = express.Router();

router.get('/movies', function(req, res, next) {
  res.render('movies/index', {books: results.rows});
});

router.get('/edit', function(req, res, next) {
  res.render('movies/edit', {books: results.rows});
});
router.get('/new', function(req, res, next) {
  res.render('movies/new', {books: results.rows});
});
router.get('/show', function(req, res, next) {
  res.render('movies/show', {books: results.rows});
});

module.exports = router;
