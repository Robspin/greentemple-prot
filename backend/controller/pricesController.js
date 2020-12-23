import asyncHandler from 'express-async-handler';

import Prices from '../models/pricesModel.js';

// @desc    Fetch all prices
// @route   GET /api/prices
// @access  Public
const getAllPrices = asyncHandler(async (req, res) => {
   const prices = await Prices.find({});
   res.json(prices);
});

export { getAllPrices };
