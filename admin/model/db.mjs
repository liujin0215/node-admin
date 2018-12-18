import Sequelize from 'sequelize';

export const sequelize = new Sequelize({
    database: 'data',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'Liujin',
    dialect: 'mysql',
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
    define: {
        underscored: true,
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: false
    }
})

