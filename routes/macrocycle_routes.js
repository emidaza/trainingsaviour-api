var express = require('express');
var router = express.Router();
const controller = require('../controllers/macrocyle_controller');


router.get('/', controller.findAll);
router.post('/', controller.create);

module.exports = router;