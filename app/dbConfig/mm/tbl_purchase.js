/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_purchase', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reference_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    other: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    grand_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    paid: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    due: {
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
    tableName: 'tbl_purchase'
  });
};
