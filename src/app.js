'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Conectar ao banco
mongoose.connect(config.connectionString)

// Carregar modelos
const Product = require('./models/product.model');
const Customer = require('./models/customer.model');
const Order = require('./models/order.model');

// Carregar rotas
const indexRoute = require('./routes/index.routes');
const productRoute = require('./routes/product.routes');
const customerRoute = require('./routes/customer.routes');
const orderRoute = require('./routes/order.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;