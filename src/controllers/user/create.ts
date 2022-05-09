import { Request, Response } from 'express';
import { userDataCore } from 'models/datacore';
import { user } from 'business';

const create = async (request: Request, response: Response) => {
  try {
    user.validation.haveAllCreationParameters(request);

    const { body } = request;

    const credentials: userDataCore.request.DefaultUser = {
      email: body.email,
      password: body.password,
      address: body.address,
      name: body.name,
      phone: body.phone,
      vehicleAge: body.vehicleAge,
      vehicleType: body.vehicleType,
    };

    const result = await user.request.createAsync(credentials);
    response.status(200).json(result);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

export default create;
