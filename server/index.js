const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/friendslist')
const { STRING } = Sequelize;

const Friend = db.define('friends', {
    name: {
        type: STRING
    },
    rating: {
        type: Sequelize.INTEGER,
        defaultValue: 5,
        validations: {
            min: 1,
            max: 10
        }
    }
})

module.exports = {
    Friend,
    db
}