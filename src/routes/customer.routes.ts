import { Router } from 'express';
import { customer } from 'controllers';

const router = Router();

router.post('/', customer.create);

export default router;
