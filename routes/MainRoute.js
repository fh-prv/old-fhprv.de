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
        router.get('/contact', (req, res) => res.status(200).render('contact'));
        router.get('/projects', (req, res) => res.status(200).render('projects'));
        router.all('*', (req, res) => res.status(200).render('404'));
    }
}

module.exports = MainRoute;
