const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define(
    'users',
    {
        'username': {type: Sequelize.STRING},
        'email': {type: Sequelize.STRING},
        'password': {type: Sequelize.STRING},
    },
    {
        freezeTableName: true
    }
);

module.exports = User;