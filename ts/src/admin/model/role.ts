import { db } from "./db";
import * as sequelize from 'sequelize'

export const Role = db.define('role', {
    name: {
        type: sequelize.STRING,
        unique: true
    }
}
);

export const fields = ['id', 'name'];