import { Router } from 'express';
import productController from '../controllers/products.controller';

const router = Router();

router.get('/', productController.getAllProducts);

export default router;