const Router = require('express');
const itemController = require('../controllers/itemController');
const router = Router();

router.post('/', itemController.create);
router.get('/:item_id', itemController.getOne);

module.exports = router;