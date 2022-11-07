import { Router } from 'express';
import ProductController from '../controllers/product';
import productValidation from '../middlewares/product';

const router = Router();

const productController = new ProductController();

router.post('/', productValidation, productController.create.bind(productController));
router.get('/', productController.findAll.bind(productController));

export default router;
