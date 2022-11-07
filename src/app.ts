import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error';
import productRoutes from './routes/product';
import userRoutes from './routes/user';

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use(errorMiddleware);
export default app;
