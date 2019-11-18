const db = require('../dbConfig');

const booleanify = (story) => {
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
            'stories.created_at',
        )

    return !!stories === true &&
        stories.length > 0 &&
        stories.map(story => booleanify(story))
};

const remove = async (id) => {
    await db('stories').where({ id }).delete()
    return await db('stories')
};

const update = async (id, updates) => {
    await db('stories').where({ id }).update(updates)
    return await findById(id)
};

module.exports = {
    getAll,
    remove,
    update
}