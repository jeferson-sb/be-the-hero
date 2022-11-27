const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile.cjs');

const connection = knex(configuration[environment]);

module.exports = connection;