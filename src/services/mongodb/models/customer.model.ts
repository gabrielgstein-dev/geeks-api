import mongoose from 'mongoose';
import { customerDataCore } from 'models/datacore';
import { CustomerSchema } from '../schemas';

const User = mongoose.model<customerDataCore.request.CreateCustomer>('Customer', CustomerSchema);

export default User;
