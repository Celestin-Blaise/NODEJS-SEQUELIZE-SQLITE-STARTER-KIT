/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_register', {
    id: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    opening_balance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    closing_balance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    opening_balance_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    closing_balance_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sale_paid_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    customer_due_receive: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    payment_methods_sale: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    register_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    user_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    outlet_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    }
  }, {
    tableName: 'tbl_register'
  });
};
