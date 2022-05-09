import jwt from 'jsonwebtoken';

const ONE_HOUR_EXPIRE_TIME_DEFAULT = 3600;
const sign = (authObject: object, expireTime?: number) => jwt.sign(authObject, process.env.JWT_SECRET || '', {
  expiresIn: expireTime || ONE_HOUR_EXPIRE_TIME_DEFAULT,
});

export default sign;
