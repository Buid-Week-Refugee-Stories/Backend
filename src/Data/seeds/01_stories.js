
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('stories')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
          id: 1,
          story_title: 'Judgement & Shoes!!',
          story_description: 'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!',
          author: 'Daysia',
          location: 'Alaska'
        },
        {
          id: 2,
          story_title: 'Chuck & the aliens',
          story_description: 'The original title for Alien vs. Predator was Alien and Predator vs Chuck Norris. The film was cancelled shortly after going into preproduction. No one would pay nine dollars to see a movie fourteen seconds long.',
          author: '',
          location: ''
        },
        {
          id: 3,
          story_title: 'How Chuck Shaves',
          story_description: 'Chuck Norris doesnt shave; he kicks himself in the face. The only thing that can cut Chuck Norris is Chuck Norris.',
          author: 'Chuck',
          location: 'The Grand Line'
        }
      ]);
    });
};
