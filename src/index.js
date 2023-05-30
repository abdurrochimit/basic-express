require('dotenv').config();
const express = require('express');

// const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const { v1Router } = require('./apis/v1');
const { NotFoundError } = require('./errors');
const { httpRequestLogger } = require('./middleware');

const app = express();

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dateNumber = date.getDate();
const logFileName = [year,month,dateNumber, 'logs.log'].join('-');
const logFilePath = path.join(__dirname, 'logs',logFileName);
const isFileExists = fs.existsSync(path.join(__dirname, 'logs',logFileName))
if (!isFileExists ) fs.createWriteStream(logFilePath);

app.use(httpRequestLogger({logFilePath : logFilePath}));

// console.log(path.join(__dirname+'/logs'));

const APP_PORT = process.env.PORT || 3000;

const IN_PROD = process.env == 'production';

// agar dapat menggunakan req.body, maka perlu menambahkan body parser
app.use(express.json());
// app.use(morgan(IN_PROD ? 'combined' : 'dev', { stream: accessLogStream }));



app.get('/', (req, res) => {
  res.status(200).send('Express Server Tutorial!')
})

app.use('/api/v1', v1Router);

app.use((req, res, next) => {
  // res.status(404).send({ message: 'NOT FOUND PAGE !' });
  throw new NotFoundError();
})

app.use((error, req, res, next) => {
  res.status(error.statusCode).send(error);
})

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port : `, APP_PORT);
  console.log(process.env.PORT);
})