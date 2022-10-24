"use strict";

var Router = require('express');

var userController = require('../controllers/userController');

var router = Router();

var _require = require('express-validator'),
    body = _require.body;

router.post('/register', body('email').isEmail(), body('password').isLength({
  min: 3,
  max: 32
}), userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/auth', userController.check);
router.get('/refresh', userController.refresh);
router.get('/activate/:link', userController.activate);
module.exports = router;