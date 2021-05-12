var express = require('express');
var router = express.Router();
const db = require('../utils/db')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* GET customers page. */
router.get('/customers', async function(req, res, next) {
  const data = await db.Customer.findAll();
  res.render('customers', {data, model: {}});
});
/* GET create page. */
router.get('/create', function(req, res, next) {
  res.render('create');
});
/* GET import page. */
router.get('/import', function(req, res, next) {
  res.render('import');
});
/* GET export page. */
router.get('/export', function(req, res, next) {
  res.render('export');
});

module.exports = router;
