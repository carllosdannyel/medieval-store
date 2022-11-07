import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

const productController = new ProductController();

router.post('/', productController.create.bind(productController));
router.get('/', productController.findAll.bind(productController));

export default router;
