const Sequelize  = require('sequelize')
const { config } = require('./../config/config')

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
