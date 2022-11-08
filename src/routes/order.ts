import { Router } from 'express';
import OrderController from '../controllers/order';
import authMiddleware from '../middlewares/auth';
import productIdsValidation from '../middlewares/order';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.findAll.bind(orderController));
router.post(
  '/', 
  authMiddleware,
  productIdsValidation,
  orderController.create.bind(orderController),
);

export default router;