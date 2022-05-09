import { userDataCore } from 'models/datacore';
import { UserModel } from '../models';
import connect from '../connect';

interface ApiResponse {
    status: number;
    message: string;
    data?: any
}
const userApi = {
  create: async (params: userDataCore.request.DefaultUser) => {
    try {
      connect();
      const modelInstance = new UserModel({ ...params });
      const result = await modelInstance.save();
      return { status: 201, message: 'CREATED_USER', data: result } as ApiResponse;
    } catch (err) {
      console.error(`userApi.create: ${err.message}`);
      if (err.code === 11000) return { status: 500, message: 'EXISTING_USER' };
      return { status: 500, message: 'SERVER_ERROR' } as ApiResponse;
    }
  },

  requestWithEmail: async (email: string) => {
    try {
      connect();
      const result = await UserModel.findOne({ email }).exec();
      return { status: 200, message: 'USER_REQUEST', data: result };
    } catch (err) {
      console.error(`userApi.create: ${err.message}`);
      return { status: 500, message: 'SERVER_ERROR' } as ApiResponse;
    }
  },
};

export default userApi;
