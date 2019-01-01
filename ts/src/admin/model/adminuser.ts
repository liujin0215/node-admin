import { db } from "./db";
import * as sequelize from 'sequelize'

export const AdminUser = db.define('adminuser', {
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
}
);

export const fields = ['id', 'name', 'password', 'role_id', 'created', 'updated'];