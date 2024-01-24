const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { router } = require('./routes');
const auth = require('./middlewares/auth');
const serverError = require('./middlewares/serverError');
const { validationUser } = require('./middlewares/validation');
const {
  createUser, login,
} = require('./controllers/users');

const { PORT = 3000 } = process.env;
const app = express();
app.use(cors());
app.use(helmet());

app.use(express.json());

app.use(requestLogger);

app.post('/sign-in', validationUser, login);
app.post('/sign-up', validationUser, createUser);

app.use(auth);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(serverError);

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
