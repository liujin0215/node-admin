import { sequelize } from './db';

sequelize.authenticate().then(res => console.log(res)).catch(err => console.log(err));