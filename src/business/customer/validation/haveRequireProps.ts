import { Request } from 'express';

const haveRequireProps = (request: Request) => {
  try {
    if (!request.body?.name) {
      throw Error('O nome do responsável é obrigatório');
    }

    if (!request.body?.companyName) {
      throw Error('O nome da empresa é obrigatória');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export default haveRequireProps;
