import { customerDataCore } from 'models/datacore';
import { CustomerModel } from '../models';
import connect from '../connect';

interface ApiResponse {
    status: number;
    message: string;
    data?: any
}
const customerApi = {
  create: async (params: customerDataCore.request.CreateCustomer) => {
    try {
      connect();
      const modelInstance = new CustomerModel({ ...params });
      const result = await modelInstance.save();
      return { status: 201, message: 'CREATED_CUSTOMER', data: result } as ApiResponse;
    } catch (err) {
      console.error(`userApi.create: ${err.message}`);
      if (err.code === 11000) return { status: 500, message: 'EXISTING_CUSTOMER' };
      return { status: 500, message: 'SERVER_ERROR' } as ApiResponse;
    }
  },
};

export default customerApi;
