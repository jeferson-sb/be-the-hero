import knex from 'knex'
import configuration from '../../knexfile.js'
import cfg from '../config/index.js'

const environment = cfg.mode

const connection = knex(configuration[environment]);
connection.raw("SELECT 1")
  .then(() => {
    console.log(`PostgreSQL connected for ${environment} environment`);
  })
  .catch((e) => {
    console.error("PostgreSQL not connected", e);
  });

export default connection;
