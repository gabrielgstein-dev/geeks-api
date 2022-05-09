import jwt from 'jsonwebtoken';
import { userDataCore } from 'models/datacore';

const verifyAsync = async (
  token: string | undefined,
): Promise<userDataCore.response.CredentialUser> => {
  if (!token) throw new Error('Usuário não autorizado.');

  const JWT_SECRET = process.env.JWT_SECRET || '';

  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      try {
        if (err) throw new Error('Falha ao autenticar o token');
        resolve(decoded as userDataCore.response.CredentialUser);
      } catch (catchError) {
        reject(catchError);
      }
    });
  });
};

export default verifyAsync;
