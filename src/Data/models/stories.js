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

module.exports = {
    getAll
}