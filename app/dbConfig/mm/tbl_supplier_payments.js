/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_supplier_payments', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    outlet_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_supplier_payments'
  });
};
