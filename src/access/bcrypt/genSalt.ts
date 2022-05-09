import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const genSalt = async () => bcrypt.genSalt(SALT_WORK_FACTOR);

export default genSalt;
