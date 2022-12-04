require('dotenv').config();
require('express-async-errors');
const express = require('express');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const PORT = process.env.PORT ?? 3333;
const API_URL = process.env.API_URL ?? 'http://localhost';

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`🔥 Server started at ${API_URL}:${PORT}`));
