const { Model } = require('sequelize');

const tableName = 'customer';

class Customer extends Model {
  static init (sequelize, DataTypes) {
    return super.init(
      {
        cusId:{
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        cusFname:{
          type: DataTypes.STRING(20),
          allowNull: false
        },
        cusLname:{
          type: DataTypes.STRING(30),
          allowNull: false
        },
        cusState:{
          type: DataTypes.CHAR(2)
        },
        cusSalesYTD:{
          type: DataTypes.DECIMAL(10,2)
        },
        cusSalesPrev:{
          type: DataTypes.DECIMAL(10,2)
        }
      },
      {
        sequelize,
        tableName,
        timestamps: false
      }
    );
  }
}

module.exports = Customer;
