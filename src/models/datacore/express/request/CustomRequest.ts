import { Request } from 'express';
import { userDataCore } from 'models/datacore';

interface RequestWithUser extends Request {
  user?: userDataCore.response.CredentialUser;
}

export default RequestWithUser;
