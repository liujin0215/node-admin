const { Role, fields } = require('../model/role');
const newCrudRouter = require('../../crud/crud');

module.exports = newCrudRouter(Role, fields);