"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
var sequelize = require("sequelize");
exports.Menu = db_1.db.define('menu', {
    name: {
        type: sequelize.STRING,
        unique: true
    },
    route: {
        type: sequelize.STRING,
        unique: true
    },
    fid: {
        type: sequelize.INTEGER
    }
});
exports.fields = ['id', 'name', 'route', 'fid'];