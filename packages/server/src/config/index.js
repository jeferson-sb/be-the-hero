import dotenv from 'dotenv'
import path from 'path'

const root = process.cwd();
dotenv.config({ path: path.join(root, '.env') });

const config = {
  port: process.env.PORT || 3333,
  mode: process.env.NODE_ENV,
  dbhost: process.env.POSTGRES_DBHOST,
  dbname: process.env.POSTGRES_DBNAME,
  dbport: process.env.POSTGRES_PORT,
  dbuser: process.env.POSTGRES_USER,
  dbpwd: process.env.POSTGRES_PASSWORD
};

export default config
