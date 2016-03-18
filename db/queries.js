var knex = require('./knex');
function Movies() {
  return knex('movies');
}


function addMovie(body) {
  return Movies().insert(body).returning('id').then(function(data) {
    return data;
  });
}

function getAllMovies() {
  return Movies().then(function(data) {
    return data;
  });
}

function getMovieById(id) {
  return Movies().where('id', id).then(function(data) {
    return data;
  });
}

function editMovie(body, id) {
  return Movies().update(body).where('id', id).returning('id').then(function(data) {
    return data;
  });
}

function deleteMovie(id) {
  return Movies().where('id', id).del();
}

module.exports = {
  addMovie: addMovie,
  getAllMovies: getAllMovies,
  getMovieById: getMovieById,
  editMovie: editMovie,
  deleteMovie: deleteMovie,
};
