const Router = require('express');
const userController = require('../controllers/userController');
const router = Router();
const {body} = require('express-validator');

router.post('/register', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/auth', userController.check);
router.get('/refresh', userController.refresh);
router.get('/activate/:link', userController.activate);

module.exports = router;