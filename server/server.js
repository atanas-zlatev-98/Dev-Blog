const express = require('express');
const dotenv = require('dotenv');
const { configDatabase } = require('./src/config/configDatabase');
const { configExpress } = require('./src/config/configExpress');
const { configRoutes } = require('./src/config/configRoutes');
dotenv.config();

startServer();
async function startServer(){
    const app = express();

    await configDatabase();
    configExpress(app);
    configRoutes(app);

}