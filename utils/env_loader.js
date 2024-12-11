import dotenv from 'dotenv';

dotenv.config();

export default function envLoader() {
  const requiredVars = ['DB_HOST', 'DB_PORT', 'DB_DATABASE', 'PORT'];
  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      console.error(Missing required environment variable: ${key});
      process.exit(1);
    }
  });
}
