/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sales_details_modifiers', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    modifier_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    modifier_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    food_menu_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    sales_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    order_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    sales_details_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    outlet_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    }
  }, {
    tableName: 'tbl_sales_details_modifiers'
  });
};
