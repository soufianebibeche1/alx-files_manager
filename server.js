import express from 'express';
import envLoader from './utils/env_loader';
import routes from './routes/index';

envLoader();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
