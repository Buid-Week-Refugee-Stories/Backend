exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();

            // * KEV-VALUES 
            tbl.string('username', 100).notNullable().unique();
            tbl.string('password', 255).notNullable();
            tbl.string('location', 50);
            tbl.boolean('admin').notNullable().defaultTo(false);
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('stories', tbl => {
            tbl.increments();

            // * KEV-VALUES 
            tbl.string('story_title', 255).notNullable();
            tbl.string('story_description', 255).notNullable();
            tbl.boolean('approved_story').notNullable().defaultTo(false);
            tbl.string('author', 100);
            tbl.string('location', 50);
            tbl.string('avatar_image', 255).defaultTo('https://source.unsplash.com/random/500x550/?people');
            tbl.string('refugee_location_img', 255).defaultTo('https://source.unsplash.com/random/1440x600/?landscape');
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('stories');
};
