var express = require('express');
var router = express.Router();
const db = require('../utils/db')
const { Op } = require("sequelize");

/* GET customers listing. */
router.get('/', async function(req, res, next) {
  const {cusid,cusfname,cuslname,cusstate,cussalesytd,cussalesprev} = req.query
  let query = {}
  let customers = []
  if(cusid) query.cusid = cusid
  if(cusfname) query.cusfname = { [Op.iRegexp]: cusfname }
  if(cuslname) query.cuslname = { [Op.iRegexp]: cuslname }
  if(cusstate) query.cusstate = cusstate
  if(cussalesytd) query.cussalesytd = { [Op.gte]: cussalesytd }
  if(cussalesprev) query.cussalesprev = { [Op.gte]: cussalesprev }
  if (query == {}) customers = await db.Customer.findAll({raw:true})
  else customers = await db.Customer.findAll({where:query,raw:true})
  console.log(customers)
  return res.status(200).json(customers)
});

module.exports = router;
