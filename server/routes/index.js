const Router = require('express');
const router = Router();
const userRouter = require('./userRouter');
const itemRouter = require('./itemRouter');
const typeRouter = require('./itemTypeRouter');
const brandRouter = require('./itemBrandRouter');

router.use('/user', userRouter);
router.use('/item', itemRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);

module.exports = router;