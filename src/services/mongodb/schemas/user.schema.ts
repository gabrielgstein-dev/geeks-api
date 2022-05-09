import mongoose from 'mongoose';
import { bcrypt } from 'access';

const { Schema } = mongoose;

const UserModelSchema = new Schema({
  id: Number,
  name: { type: String },
  email: { type: String, unique: true },
  phone: String,
  address: String,
  password: String,
  vehicleType: String,
  vehicleAge: String,
});

async function preSaveFn(this: any, next: (err?: mongoose.CallbackError) => void) {
  try {
    if (!this.isModified('password')) return next();

    const hash = await bcrypt.hash(this.password);
    this.password = hash;
  } catch (err) {
    next(err);
  }

  return next();
}

UserModelSchema.pre('save', preSaveFn.bind(this));

export default UserModelSchema;
