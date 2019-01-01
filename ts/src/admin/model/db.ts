import * as sequelize from 'sequelize'
import { adminSQLConfig } from "../../config/config"

export const db = new sequelize(adminSQLConfig)