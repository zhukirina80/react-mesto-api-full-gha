require('dotenv').config();
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

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();
app.use(cors());
app.use(helmet());

app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validationUser, login);
app.post('/signup', validationUser, createUser);

app.use(auth);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(serverError);

mongoose.connect(DB_URL);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
