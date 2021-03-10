import asyncHandler from 'express-async-handler';

import Trades from '../models/tradeModel.js';

// @desc    Fetch all trades
// @route   GET /api/trades
// @access  Public
const getAllTrades = asyncHandler(async (req, res) => {
   const trades = await Trades.find({});
   res.json(trades);
});

export { getAllTrades };
