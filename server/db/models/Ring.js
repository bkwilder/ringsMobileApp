const Sequelize = require('sequelize')
const db = require('../db')




const Ring = db.define('ring', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }
})

module.exports = Ring

