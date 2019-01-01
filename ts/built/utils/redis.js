"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redis = require("redis");
var bluebird = require("bluebird");
var config_1 = require("../config/config");
exports.redisClient = bluebird.promisifyAll(redis.createClient(config_1.redisConfig));
