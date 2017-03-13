var express = require('express');
var router = express.Router();
var mantenedorCtrl = require('../controllers/mantenedor');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/mantenedor').get(mantenedorCtrl.findAll);
router.route('/mantenedor').post(mantenedorCtrl.add);
router.route('/mantenedor').put(mantenedorCtrl.update);
router.route('/mantenedor').delete(mantenedorCtrl.delete);

module.exports = router;
