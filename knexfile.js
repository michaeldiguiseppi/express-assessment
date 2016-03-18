// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/moviedb'
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
