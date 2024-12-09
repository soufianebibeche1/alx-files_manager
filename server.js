import express from 'express';
import envLoader from './utils/env_loader.js';
import routes from './routes/index.js';

envLoader();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
