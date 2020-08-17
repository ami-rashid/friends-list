const express = require('express')
const router = express.Router();
const models = require('../server/index');
const Friend = models.Friend;

const allPromises = [Friend.findAll()];
let allFriends = {};

router.get('/', async (req, res, next) => {
    await Promise.all(allPromises).then((values) => {
        allFriends = values[0];
    })

    res.send(allFriends);
})

module.exports = router;