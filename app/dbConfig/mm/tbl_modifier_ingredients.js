/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_modifier_ingredients', {
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
    modifier_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
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
    tableName: 'tbl_modifier_ingredients'
  });
};
