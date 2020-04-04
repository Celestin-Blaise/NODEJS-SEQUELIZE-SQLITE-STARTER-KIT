/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_holds_details', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    food_menu_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    menu_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    menu_price_without_discount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    menu_price_with_discount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    menu_unit_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    menu_vat_percentage: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    menu_taxes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_discount_value: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    discount_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    menu_note: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    discount_amount: {
      type: "DOUBLE(10,2)",
      allowNull: true
    },
    holds_id: {
      type: DataTypes.INTEGER(10),
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
    tableName: 'tbl_holds_details'
  });
};
