require('dotenv').config();

module.exports = function envLoader() {
  const requiredVars = ['DB_HOST', 'DB_PORT', 'DB_DATABASE', 'PORT'];
  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      console.error(`Missing required environment variable: ${key}`);
      process.exit(1); // Exit the process if required env vars are missing
    }
  });
};
