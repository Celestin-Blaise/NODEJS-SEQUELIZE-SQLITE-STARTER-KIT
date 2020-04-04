/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_outlet_taxes', {
    id: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tax: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    outlet_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    del_status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_outlet_taxes'
  });
};
