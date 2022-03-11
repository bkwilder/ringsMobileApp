const Sequelize = require('sequelize')
const db = require('../db')




const Note = db.define('note', {
    note: {
        type: Sequelize.TEXT
    },
    resourceLink: {
        type: Sequelize.STRING
    },
})

module.exports = Note