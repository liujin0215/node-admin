const { sessionConfig } = require('../config/config');
const client = require('../utils/redis');
const RedisSessionManager = require('./manager');

module.exports = new RedisSessionManager(client, sessionConfig.baseKey, sessionConfig.ttl);