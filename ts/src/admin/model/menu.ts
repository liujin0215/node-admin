import { db } from "./db";
import * as sequelize from 'sequelize'

export const Menu = db.define('menu', {
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
})

export const fields = ['id', 'name', 'route', 'fid']