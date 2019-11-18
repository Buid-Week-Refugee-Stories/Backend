
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Richard',
          password: 'test',
          location: 'USA'
        },
        {
          id: 2,
          username: 'Chanice',
          password: 'test',
          location: 'Germany'
        },
        {
          id: 3,
          username: 'Jonathan',
          password: 'test',
          location: 'Taiwan'
        }
      ]);
    });
};