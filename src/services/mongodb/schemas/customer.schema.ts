import mongoose from 'mongoose';

const { Schema } = mongoose;

const CustomerModelSchema = new Schema({
  id: { type: mongoose.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: false },
  companyName: { type: String, required: false },
  phone: { type: String, required: false },
  address: { type: String, required: false },
});

export default CustomerModelSchema;
