import * as sequelize from 'sequelize'
import { ClientOpts } from 'redis';

export const adminSQLConfig: sequelize.Options = {
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
    } as sequelize.Options
}

export const redisConfig: ClientOpts = {
    host: 'localhost',
    port: 6379
}