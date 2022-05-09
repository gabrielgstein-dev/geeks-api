import bcrypt from 'bcrypt';
import genSalt from './genSalt';

const hash = async (value: string) => {
  const salt = await genSalt();
  const bcryptHash = await bcrypt.hash(value, salt);

  return bcryptHash;
};
export default hash;
