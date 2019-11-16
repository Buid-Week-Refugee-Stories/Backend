
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Richard',
          password: 'test',
          origin: 'USA',
          avatar_image: ''
        },
        {
          id: 2,
          username: 'Chanice',
          password: 'test',
          origin: 'Germany',
          avatar_image: ''
        },
        {
          id: 3,
          username: 'Jonathan',
          password: 'test',
          origin: 'Taiwan',
          avatar_image: ''
        }
      ]);
    });
};