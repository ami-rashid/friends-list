const express = require('express')
const router = express.Router();
const models = require('../server/index');
const Friend = models.Friend;

router.get('/', async (req, res) => {
    const allFriends = await Friend.findAll({
        order: [['rating', 'DESC']]
    });
    res.send(allFriends);
})

router.post('/', async (req, res) => {
    const newFriend = await Friend.create({
        name: req.params.name,
        rating: 5
    })
    res.send(newFriend);
})

router.delete('/', async (req, res) => {
    const newFriend = await Friend.destroy({
        where: {
            
        }
    })
})

module.exports = router;