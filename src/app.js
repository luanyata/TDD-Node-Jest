require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? ".env.test" : 'env'
});

const express = require('express');


class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routers();
    }

    middlewares() {
        this.express.use(express.json())
    }

    routers() {
        this.express.use(require('./routes'))
    }
}


module.exports = new AppController().express;