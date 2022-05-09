import { Request } from 'express';

const haveAllCreationParameters = (request: Request) => {
  try {
    if (!request.body?.email) {
      throw Error('Email é obrigatório');
    }

    if (!request.body?.password) {
      throw Error('Senha é obrigatória');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export default haveAllCreationParameters;
