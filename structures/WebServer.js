'use strict';

const express = require('express');
const MainRoute = require('../routes/MainRoute');

/**
 * WebServer
 * @class
 */
class WebServer {
    /**
     * The constructor of WebServer
     * @public
     */
    constructor() {
        /**
         * App
         * @type {?import('express').Application}
         * @public
         */
        this.app = null;

        this.init();
    }
    /**
     * Init
     * @returns {Boolean}
     * @private
     */
    init() {
        console.log('Launching webserver...');

        const app = this.app = express();

        app
            .use(express.json())
            .use(express.urlencoded({ extended: true }))
            .engine('html', require('ejs').renderFile)
            .set('view engine', 'ejs')
            .use(express.static(require('node:path').join(__dirname, '../public')))
            .set('views', require('node:path').join(__dirname, '../views'))
            .set('port', process.env.PORT);

        app.listen(app.get('port'), () => console.log(`Listening on http://localhost:${app.get('port')}`));

        app.use('/', new MainRoute(this).router);

        console.log('Launched webserver!');

        return true;
    }
}

module.exports = WebServer;
