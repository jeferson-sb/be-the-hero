import app from './app.js'
import config from './config/index.js'

app.listen(config.port, () => {
  console.log(`Server is up and running at http://localhost:${config.port}`);
});
