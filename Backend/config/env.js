import dotenv from 'dotenv';
import pkg from 'env-var';
const { get } = pkg;
dotenv.config();
const envs = {
  PORT: get('PORT').required().asPortNumber(),
  URI: get('MONGODB_URI').required().asString(),
};
export default envs;
