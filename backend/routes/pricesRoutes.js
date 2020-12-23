import express from 'express';

import { getAllPrices } from '../controller/pricesController.js';

const router = express.Router();

router.route('/').get(getAllPrices);

export default router;
