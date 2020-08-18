const express = require('express')
const router = express.Router();
const models = require('../server/index');
const Friend = models.Friend;


router.get('/', async (req, res, next) => {
    const allFriends = await Friend.findAll();
    res.send(allFriends);
})

module.exports = router;