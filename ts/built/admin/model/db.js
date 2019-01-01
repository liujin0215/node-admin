"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize = require("sequelize");
var config_1 = require("../../config/config");
exports.db = new sequelize(config_1.adminSQLConfig);
