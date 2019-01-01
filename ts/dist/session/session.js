"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var manager_1 = require("./manager");
var redis_1 = require("../utils/redis");
var sessionManger = new manager_1.RedisSessionManager(redis_1.redisClient);
exports.default = sessionManger;