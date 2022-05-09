import mongoose from 'mongoose';

const connect = async () => {
  if (!process.env.MONGO_DB_CONNECT) throw new Error('Banco de dados não configurado');
  return mongoose.connect(process.env.MONGO_DB_CONNECT);
};

export default connect;
