const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
        'online_store',
        'postgres',
        'LebroSchweps',
        {
            dialect: 'postgres',
            host: 'localhost',
            port: '5432'
        }
)