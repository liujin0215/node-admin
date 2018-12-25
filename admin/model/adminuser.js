const { sequelize } = require('./db');
const Sequelize = require('sequelize');

exports.AdminUser = sequelize.define('adminuser', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    role_id: {
        type: Sequelize.INTEGER
    },
    created: {
        type: Sequelize.INTEGER
    },
    updated: {
        type: Sequelize.INTEGER
    }
}
);

exports.fields = ['id', 'name', 'password', 'role_id', 'created', 'updated'];