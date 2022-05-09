/* eslint-disable no-console */
/* eslint-disable global-require */
import express from 'express';

import { userRoutes, customerRoutes } from 'routes';

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);
app.use('/api/customer', customerRoutes);

app.get('/', async (_req, res) => {
  res.send('Ding Dong!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
