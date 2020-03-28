const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', routes);
app.use(errors());

module.exports = app;
