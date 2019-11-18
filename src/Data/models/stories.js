const db = require('../dbConfig');

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
        stories
}

const update = async (id, updates) => {
    await db('stories').where({ id }).update(updates)
    return await db('stories').where({ id })
};

module.exports = {
    getAll,
    update
}