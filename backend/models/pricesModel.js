import mongoose from 'mongoose';

const priceSchema = mongoose.Schema({
   date: { type: String, required: true },
   BTC: { type: Number, required: true },
   XAU: { type: Number, required: true },
   XAG: { type: Number, required: true }
});

const Prices = mongoose.model('Prices', priceSchema);

export default Prices;
