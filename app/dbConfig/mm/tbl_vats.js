/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_vats', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    percentage: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1.00'
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_vats'
  });
};
