const express = require('express');
const envLoader = require('./utils/env_loader');
const routes = require('./routes/index');

envLoader();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
