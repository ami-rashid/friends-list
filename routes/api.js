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

router.post('/', async (req, res, next) => {
    try {
        Friend.create({
            name: req.body.name,
            rating: 5
        })
        res.redirect('/');
    } catch (err) {
        next (err);
    }
})

router.delete('/', async (req, res) => {
    try {
        Friend.destroy({
            where: {
                name:req.body.params.name
            }
        })
        res.redirect('/');
    } catch (err) {
        next (err);
    }
})

router.put('/:name', async (req, res) => {
    try {
        Friend.update({rating: req.body.value},{
            where: {
                name:req.body.params.name
            }
        })
        res.redirect('/');
    } catch (err) {
        next (err);
    }
})

module.exports = router;