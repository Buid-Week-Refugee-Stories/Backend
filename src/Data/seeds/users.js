
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
          location: 'USA',
          avatar_image: ''
        },
        {
          id: 2,
          username: 'Chanice',
          password: 'test',
          location: 'Germany',
          avatar_image: ''
        },
        {
          id: 3,
          username: 'Jonathan',
          password: 'test',
          location: 'Taiwan',
          avatar_image: ''
        }
      ]);
    });
};