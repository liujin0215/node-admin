const { sequelize } = require('./db');
const Sequelize = require('sequelize');

exports.Menu = sequelize.define('menu', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    route: {
        type: Sequelize.STRING,
        unique: true
    },
    fid: {
        type: Sequelize.INTEGER
    }
}
);

exports.fields = ['id', 'name', 'route', 'fid'];