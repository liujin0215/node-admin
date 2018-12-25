const { sequelize } = require('./db');
const Sequelize = require('sequelize');

exports.AdminUser = sequelize.define('adminuser', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
}
);

exports.fields = ['id', 'name'];