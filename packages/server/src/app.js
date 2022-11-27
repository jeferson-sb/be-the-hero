import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { errors } from 'celebrate'
import routes from './routes.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', routes);
app.use(errors());

export default app
