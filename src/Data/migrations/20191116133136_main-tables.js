exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();

            // * KEV-VALUES 
            tbl.string('username', 100).notNullable().unique();
            tbl.string('password', 255).notNullable();
            tbl.string('avatar_image', 255);
            tbl.string('origin', 50);
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('stories', tbl => {
            tbl.increments();

            // * KEV-VALUES 
            tbl.string('story_title', 255).notNullable();
            tbl.string('story_description', 255).notNullable();

            // * FOREIGN KEY
            tbl.integer('story_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('stories');
};
