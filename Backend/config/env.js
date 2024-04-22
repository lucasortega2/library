import dotenv from 'dotenv';
import pkg from 'env-var';
const { get } = pkg;
dotenv.config();

const envs = {
  PORT: get('PORT').required().asPortNumber(),
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
};
export default envs;
