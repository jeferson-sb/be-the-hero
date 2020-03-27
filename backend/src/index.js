const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(config.port, () => {
  console.log(`Server is up and running at http://localhost:${config.port}`);
});
