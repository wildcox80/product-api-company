import { Router } from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controller'

router.get('/', productsCtrl.getProduct)

export default router;