"use strict";

var Router = require('express');

var router = Router();

var userRouter = require('./userRouter');

var itemRouter = require('./itemRouter');

var typeRouter = require('./itemTypeRouter');

var brandRouter = require('./itemBrandRouter');

router.use('/user', userRouter);
router.use('/item', itemRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
module.exports = router;