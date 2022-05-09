import { userDataCore } from 'models/datacore';
import { mongoDB } from 'services';

const create = async (credentials: userDataCore.request.DefaultUser) => mongoDB.api.userApi.create(credentials);

export default create;
