import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error';
import productRoutes from './routes/product';

const app = express();
app.use(express.json());

app.use('/products', productRoutes);

app.use(errorMiddleware);
export default app;
