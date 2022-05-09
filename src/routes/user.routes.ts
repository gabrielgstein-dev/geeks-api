import { Router } from 'express';
import { user } from 'controllers';

const router = Router();
const ROUTE_NAME = '/user';

router.post(`${ROUTE_NAME}`, user.create);
router.post(`${ROUTE_NAME}/auth`, user.authentication);

export default router;
