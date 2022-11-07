import { Router } from 'express';
import LoginController from '../controllers/login';
import userValidation from '../middlewares/login';

const router = Router();

const loginController = new LoginController();

router.post('/', userValidation, loginController.login.bind(loginController));

export default router;