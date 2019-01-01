"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var sequelize = require("sequelize");
exports.Role = db_1.db.define('role', {
    name: {
        type: sequelize.STRING,
        unique: true
    }
});
exports.fields = ['id', 'name'];
