const { hashPassword } = require('../../API/Routes/Auth/Utils/hash');

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
          password: hashPassword('test'),
          location: 'USA',
          admin: true
        },
        {
          id: 2,
          username: 'Chanice',
          password: hashPassword('test'),
          location: 'Germany',
          admin: false
        },
        {
          id: 3,
          username: 'Jonathan',
          password: hashPassword('test'),
          location: 'Taiwan',
          admin: false
        }
      ]);
    });
};