/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sale_consumptions_of_menus', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ingredient_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    consumption: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    sale_consumption_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    sales_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    order_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    food_menu_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
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
    tableName: 'tbl_sale_consumptions_of_menus'
  });
};
