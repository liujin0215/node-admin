const redis = require('redis');
const bluebird = require('bluebird');
const { redisConfig } = require('../config/config');

bluebird.promisifyAll(redis);

module.exports = redis.createClient(redisConfig);