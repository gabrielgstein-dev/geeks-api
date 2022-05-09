import mongoose from 'mongoose';
import { userDataCore } from 'models/datacore';
import { UserSchema } from '../schemas';

const User = mongoose.model<userDataCore.request.DefaultUser>('User', UserSchema);

export default User;
