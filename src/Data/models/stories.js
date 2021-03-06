const db = require('../dbConfig');

const add = async (story) => {
    const [id] = await db('stories').insert(story, 'id');
    return findById(id);
}

const booleanify = (story) => {

    if (story.approved_story === true || story.approved_story === false) story;

    if (story.approved_story === 0 || story.approved_story === '0') {
        return {
            ...story,
            approved_story: false
        }
    };

    if (story.approved_story === 1 || story.approved_story === '1') {
        return {
            ...story,
            approved_story: true
        }
    };
};

const findById = (id) => db('stories').where({ id });

const getAll = async () => {
    const stories = await db('stories')
        .select(
            'stories.id',
            'stories.story_title',
            'stories.story_description',
            'stories.approved_story',
            'stories.author',
            'stories.location',
            'stories.avatar_image',
            'stories.refugee_location_img',
            'stories.created_at',
        )

    if (process.env.DATABASE_URL && !!stories === true && stories.length > 0) stories

    return !!stories === true &&
        stories.length > 0 &&
        stories.map(story => booleanify(story))
};

const remove = async (id) => {
    await db('stories').where({ id }).delete();
    return db('stories');
};

const update = async (id, updates) => {
    await db('stories').where({ id }).update(updates)
    return findById(id);
};

module.exports = {
    add,
    getAll,
    remove,
    update
}