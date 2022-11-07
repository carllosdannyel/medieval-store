import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error';
import productRoutes from './routes/product';
import userRoutes from './routes/user';
import orderRoutes from './routes/order';

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.use(errorMiddleware);
export default app;
