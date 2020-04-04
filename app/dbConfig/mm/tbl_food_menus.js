/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_food_menus', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sale_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    tax_information: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    veg_item: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Veg No'
    },
    beverage_item: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Beverage No'
    },
    bar_item: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Bar No'
    },
    del_status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_food_menus'
  });
};
