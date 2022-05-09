import { Request, Response } from 'express';
import { customerDataCore } from 'models/datacore';
import { customer } from 'business';

const create = async (request: Request, response: Response) => {
  try {
    customer.validation.haveRequireProps(request);

    const { body } = request;

    const credentials: customerDataCore.request.CreateCustomer = {
      email: body.email,
      address: body.address,
      name: body.name,
      phone: body.phone,
      companyName: body.companyName,
    };

    const result = await customer.request.createAsync(credentials);
    response.status(200).json(result);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

export default create;
