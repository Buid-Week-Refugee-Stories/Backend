const Stories = require('../../Data/models/stories');
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

module.exports = router;