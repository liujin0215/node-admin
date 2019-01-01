"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSQLConfig = {
    database: 'data',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Liujin',
    dialect: 'mysql',
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000
    },
    define: {
        underscored: true,
        freezeTableName: true,
        charset: 'utf8',
        timestamps: false
    }
};
exports.redisConfig = {
    host: 'localhost',
    port: 6379
};