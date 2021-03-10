import asyncHandler from 'express-async-handler';

import Active from '../models/activeTradeModel.js';

// @desc    Fetch active status
// @route   GET /api/active
// @access  Public
const getActive = asyncHandler(async (req, res) => {
   const active = await Active.find({ id: 1 });
   return res.json(active);
});

export { getActive };
