import { customerDataCore } from 'models/datacore';
import { mongoDB } from 'services';

const createAsync = async (credentials: customerDataCore.request.CreateCustomer) => mongoDB.api.customerApi.create(credentials);

export { createAsync };
export default createAsync;
