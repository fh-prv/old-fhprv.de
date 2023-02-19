'use strict';

const Route = require('../structures/Route');

/**
 * MainRoute
 * @extends {Route}
 * @class
 */
class MainRoute extends Route {
    handle() {
        const router = this.router;

        router.get('/', (req, res) => res.status(200).render('index'));
        router.get('/about', (req, res) => res.status(200).render('about'));
    }
}

module.exports = MainRoute;
