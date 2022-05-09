import { Request, Response } from 'express';
import { userDataCore } from 'models/datacore';
import { user } from 'business';

import { jwt } from 'access';

const authentication = async (request: Request, response: Response) => {
  try {
    user.validation.haveAllCreationParameters(request);
    const { body } = request;

    const credentials: userDataCore.request.AuthenticateUser = {
      email: body.email,
      password: body.password,
    };

    const responseUser = await user.request.authenticationAsync(credentials);
    const token = jwt.sign(responseUser);

    response.status(200).json({
      data: {
        token,
      },
    });
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

export default authentication;
