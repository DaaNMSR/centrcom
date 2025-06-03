import express from 'express';
import path from 'path';
import cors from 'cors';
import productRouter from './routes/productsRouter';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, './public')));

app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.send('Mock server is running');
});

app.listen(port, () => {
  console.log(`Mock API: http://localhost:${port}`);
});
