import { Router } from 'express';
import UserController from '../controllers/user';
import userValidation from '../middlewares/user';

const router = Router();

const userController = new UserController();

router.post('/', userValidation, userController.create.bind(userController));

export default router;
