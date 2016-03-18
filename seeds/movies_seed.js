
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(),

    // Inserts seed entries
    knex('movies').insert({director: 'James Cameron', title: 'Titanic', rating: 3, description: 'A seventeen year old aristocrat falls in love with a poor artist before the ship sinks.'}),
    knex('movies').insert({director: 'Steven Spielberg', title: 'Jaws', rating: 4, description: 'When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and a grizzled fisherman set out to stop it.'}),
    knex('movies').insert({director: 'Tim Burton', title: 'Sweeney Todd', rating: 4, description: 'The infamous story of Benjamin Barker, AKA Sweeney Todd, who sets up a barber shop down in London which is the basis for a sinister partnership with his fellow tenant, Mrs. Lovett.'})
  );
};
