import cors from 'cors';
import express, { json } from 'express';
import { booksRouter } from './routers/booksRouter.js';
import envs from './config/env.js';
const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(json());

app.use('/books', booksRouter);

app.listen(envs.PORT, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${envs.PORT}/books`,
  );
});
