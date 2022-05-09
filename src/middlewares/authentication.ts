import { Request, Response, NextFunction } from 'express';
import { user as userBusiness } from 'business';

import { jwt } from 'access';
import { userDataCore } from 'models/datacore';

interface RequestUser extends Request {
  user?: any;
}

const verifyJwtAsync = async (
  req: RequestUser,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authentication;
    const user = await jwt.verifyAsync(token as string);

    const databaseUser = await userBusiness.request.requestByIdAndUsername({
      email: user.email,
      id: user.id,
    } as Partial<userDataCore.request.DefaultUser>);

    if (databaseUser.id !== user.id) throw new Error('Usuário não autorizado.');
    if (databaseUser.email !== user.email) throw new Error('Usuário não autorizado.');
    if (databaseUser.password !== user.password) throw new Error('Usuário não autorizado.');

    req.user = user;
    next();
  } catch (err) {
    next(new Error(err.message));
  }
};

export default verifyJwtAsync;
