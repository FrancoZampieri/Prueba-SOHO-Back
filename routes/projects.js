'use strict';

const express = require('express');
const controller = require('../controllers/projects/projects')

module.exports = (() => {
    const router = new express.Router();

    router.get('/projects', controller.getProjects)

    return router;
})();