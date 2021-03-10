import mongoose from 'mongoose';

const activeTradeSchema = new mongoose.Schema({
   id: { type: Number, required: true },
   active: { type: Boolean, required: true }
});

const ActiveTrade = mongoose.model('ActiveTrade', activeTradeSchema);

export default ActiveTrade;
