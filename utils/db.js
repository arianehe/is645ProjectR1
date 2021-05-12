const Sequelize = require('sequelize');
const fs = require('fs')

const sequelizeOptions = {
  operatorsAliases: Sequelize.Op,
  quoteIdentifiers: false
};
const sequelize = new Sequelize(process.env.DATABASE_URL, sequelizeOptions);

const CustomerModel = require('../models/customer.model');


const models = {
  Customer: CustomerModel.init(sequelize, Sequelize),
};

const createTable = async () => {
  await models.Customer.sync({
      force: true,
  });
}

(async () => {
  console.log('create table')
  await createTable();
  console.log('add initial data')
  const buffer = fs.readFileSync('./data/projCustomers.sql')
  const sql = buffer.toString();
  await sequelize.query(sql)
})()




// Run .associate if it exists, this creates the ORM's relationships
Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize
};

module.exports = db;