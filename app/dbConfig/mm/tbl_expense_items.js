/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_expense_items', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(50),
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
    del_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_expense_items'
  });
};
