const Sequelize = require('sequelize');
const {adminSQLConfig} = require('../../config/config');

exports.sequelize = new Sequelize(adminSQLConfig);
