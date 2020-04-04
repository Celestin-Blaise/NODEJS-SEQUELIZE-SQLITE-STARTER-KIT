/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_waste_ingredients', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    ingredient_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    waste_amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    last_purchase_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    loss_amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    waste_id: {
      type: DataTypes.INTEGER(10),
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
    tableName: 'tbl_waste_ingredients'
  });
};
