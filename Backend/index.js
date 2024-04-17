import cors from 'cors';
import express, { json } from 'express';
import { booksRouter } from './routers/booksRouter.js';
const app = express();

const PORT = process.env.PORT ?? 5000;

app.disable('x-powered-by');
app.use(cors());
app.use(json());

app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${PORT}/books`,
  );
});
