import express from 'express';

import { getAllTrades } from '../controller/tradeController.js';
import { getActive } from '../controller/activeController.js';

const router = express.Router();

router.route('/').get(getAllTrades);
router.route('/active').get(getActive);

export default router;
