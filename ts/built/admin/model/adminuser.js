"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var sequelize = require("sequelize");
exports.AdminUser = db_1.db.define('adminuser', {
    name: {
        type: sequelize.STRING,
        unique: true
    },
    password: {
        type: sequelize.STRING
    },
    role_id: {
        type: sequelize.INTEGER
    },
    created: {
        type: sequelize.INTEGER
    },
    updated: {
        type: sequelize.INTEGER
    }
});
exports.fields = ['id', 'name', 'password', 'role_id', 'created', 'updated'];
