import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
   date: { type: String, required: true },
   type: { type: String, required: true },
   price: { type: Number, required: true },
   quantity: { type: Number, required: true },
   tradingBallanceUsdt: { type: Number, required: true },
   tradingBallanceBTC: { type: Number, required: true }
});

const Trade = mongoose.model('Trade', tradeSchema);

export default Trade;
