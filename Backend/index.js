import cors from 'cors';
import express, { json } from 'express';
import { booksRouter } from './routers/booksRouter.js';
import envs from './config/env.js';
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.PORT ?? envs.PORT;
const URI = process.env.MONGODB_URI || envs.URI;
app.disable('x-powered-by');
app.use(cors());
app.use(json());

app.use('/books', booksRouter);
mongoose.connect(URI);
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${PORT}/books`,
  );
});
