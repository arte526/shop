"use strict";

var Router = require('express');

var userController = require('../controllers/userController');

var router = Router();
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/auth', userController.check);
router.get('/activate/:link', userController.activate);
module.exports = router;