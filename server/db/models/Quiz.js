const Sequelize = require('sequelize')
const db = require('../db')




const Quiz = db.define('quiz', {
    name: {
        type: Sequelize.STRING
    },

    description: {
        type: Sequelize.TEXT
    }, 

    linkToResource: {
        type: Sequelize.STRING
    },

    image: {
        type: Sequelize.STRING
    },

    // value of quiz, ex: if type is enneagram, value might be Seven: The Enthusiast
    value: {
        type: Sequelize.STRING
    },

    //true if default quiz created by admin or false if created by user
    createdByAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
}
)

module.exports = Quiz