import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
import productRouter from './routes/productsRouter';
import catalogCategoriesRouter from './routes/catalogCategoriesRouter';
import vacanciesShortRouter from './routes/vacanciesShort';
import vacanciesDetailsRouter from './routes/vacanciesDetails';
import mainCategoriesRouter from './routes/mainCategoriesRouter';
import categoryProductsRouter from './routes/categoryProductsRouter';
import filtersSideBarRouter from './routes/filtersSideBarRouter';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.local';
dotenv.config({ path: envFile });

const PROTOCOL = process.env.PROTOCOL || 'http';
const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 3001;
const SSL_KEY_PATH = process.env.SSL_KEY_PATH;
const SSL_CERT_PATH = process.env.SSL_CERT_PATH;

const app = express();

app.use(
  cors({
    origin: '*',
    exposedHeaders: ['X-Total-Count'],
  }),
);
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/main-categories', mainCategoriesRouter);
app.use('/category', categoryProductsRouter);
app.use('/products', productRouter);
app.use('/categories', catalogCategoriesRouter);
app.use('/vacancies-short', vacanciesShortRouter);
app.use('/vacancies-details', vacanciesDetailsRouter);
app.use('/filters', filtersSideBarRouter);

app.get('/', (req, res) => {
  res.send('Mock server is running');
});

if (PROTOCOL === 'https') {
  if (!SSL_KEY_PATH || !SSL_CERT_PATH) {
    console.error('SSL_KEY_PATH or SSL_CERT_PATH is missing in .env');
    process.exit(1);
  }

  import('https').then(https => {
    const options = {
      key: fs.readFileSync(SSL_KEY_PATH),
      cert: fs.readFileSync(SSL_CERT_PATH),
    };
    https.createServer(options, app).listen(PORT, HOST, () => {
      console.log(`Mock API: https://${HOST}:${PORT}`);
    });
  });
} else {
  app.listen(PORT, HOST, () => {
    console.log(`Mock API: http://${HOST}:${PORT}`);
  });
}
