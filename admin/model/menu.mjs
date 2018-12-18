import { sequelize } from './db';
import Sequelize from 'sequelize';

export const Menu = sequelize.define('menu', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    route: {
        type: Sequelize.STRING,
        unique: true
    },
    fid: {
        type: Sequelize.INTEGER
    }
}
)