const { Menu, fields } = require('../model/menu');
const newCrudRouter = require('../../crud/crud');

module.exports = newCrudRouter(Menu, fields);