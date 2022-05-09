import bcrypt from 'bcrypt';

const compareHash = async (value: string, hash: string) => bcrypt.compare(value, hash);
export default compareHash;
