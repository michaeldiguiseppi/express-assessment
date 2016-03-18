var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/movies', function(req, res, next) {
  queries.getAllMovies().then(function(data) {
    res.render('movies/index', {movies: data});
  });
});

router.get('/movie/new', function(req, res, next) {
  res.render('movies/new');
});

router.post('/movies', function(req, res, next) {
  queries.addMovie(req.body).then(function(data) {
    res.redirect('/movies');
  });
});

router.get('/movie/:id', function(req, res, next) {
  var id = req.params.id;
  queries.getMovieById(id).then(function(data) {
    res.render('movies/show', {movie: data[0]});
  });
});

router.get('/movie/edit/:id', function(req, res, next) {
  var id = req.params.id;
  queries.getMovieById(id).then(function(data) {
    res.render('movies/edit', {movie: data[0]});
  });
});

router.post('/movie/:id', function(req, res, next) {
  var id = req.params.id;
  queries.editMovie(req.body, id).then(function(data) {
    res.redirect('/movie/' + data[0]);
  });
});

router.post('/movie/delete/:id', function(req, res, next) {
  var id = req.params.id;
  queries.deleteMovie(id).then(function() {
    res.redirect('/movies');
  });
});

module.exports = router;
