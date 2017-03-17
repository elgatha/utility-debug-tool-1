const Sequelize = require('sequelize');
if (!process.env.NODE_ENV) require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,

  // Connections
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Create Table
const url = sequelize.define('url', {
  name: {
    type: Sequelize.STRING,
  },
  longurl: {
    type: Sequelize.STRING,
  },
  shorturl: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();

// Export

exports.sequelize = sequelize;
exports.url = url;
