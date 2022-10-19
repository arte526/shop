const Router = require('express');
const itemTypeController = require('../controllers/itemTypeController');
const router = Router();

router.post('/', itemTypeController.create);
router.get('/', itemTypeController.getAll);

module.exports = router;