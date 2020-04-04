/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_ingredients', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    purchase_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    alert_quantity: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_ingredients'
  });
};
