import { bcrypt } from 'access';
import { userDataCore } from 'models/datacore';
import { mongoDB } from 'services';

const authentication = async (credentials: userDataCore.request.AuthenticateUser) => {
  try {
    const result = await mongoDB.api.userApi.requestWithEmail(credentials.email);
    if (!result.data) throw new Error('USER_NOT_FOUND');

    if (!(await bcrypt.compareHash(credentials.password, result.data.password))) {
      throw new Error('USER_NOT_FOUND');
    }

    return result.data.toObject();
  } catch (err) {
    throw new Error(err.message);
  }
};

export default authentication;
