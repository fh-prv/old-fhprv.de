'use strict';

const { Router } = require('express');

/**
 * Route
 * @class
 */
class Route {
    /**
     * The constructor of Route
     * @param {import('./WebServer')} webserver webserver
     */
    constructor(webserver) {
        /**
         * Webserver
         * @type {import('./WebServer')}
         * @public
         */
        this.webserver = webserver;

        /**
         * Router
         * @type {Router}
         * @public
         */
        this.router = Router();

        this.handle();
    }

    handle() {
        throw new Error('INVALID_HANDLE_FUNCTION');
    }
}

module.exports = Route;
