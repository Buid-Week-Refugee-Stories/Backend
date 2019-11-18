const Stories = require('../../Data/models/stories');
const { decode } = require('./Auth/Utils/decode');
const router = require('express').Router();

// * ROUTES
router.get('/', (req, res) => {
    Stories.getAll()
        .then(storyList => res.status(200).json(storyList))
        .catch(err => res.status(500).json({
            error: err,
            message: "Not able to return list of story data!"
        }))
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    (!!decode(req) === true && decode(req).admin === true && !!changes === true)
        && Stories.update(id, changes)
            .then(story => res.status(200).json(story))
            .catch(err => res.status(500).json(err))
})

module.exports = router;