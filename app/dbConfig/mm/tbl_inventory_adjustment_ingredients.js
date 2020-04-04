/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_inventory_adjustment_ingredients', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ingredient_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    consumption_amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    inventory_adjustment_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    consumption_status: {
      type: DataTypes.ENUM('Plus','Minus',''),
      allowNull: true
    },
    outlet_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_inventory_adjustment_ingredients'
  });
};
