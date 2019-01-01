exports.adminSQLConfig = {
    database: 'data',
    host: 'localhost',
    port: '3306',
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
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: false
    }
};

exports.redisConfig = {
    host: 'localhost',
    port: 6379
};

exports.sessionConfig = {
    baseKey: 'session:',
    ttl: 86400
};