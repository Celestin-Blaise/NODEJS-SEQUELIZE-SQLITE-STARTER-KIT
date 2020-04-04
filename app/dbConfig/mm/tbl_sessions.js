/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sessions', {
    id: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    data: {
      type: "BLOB",
      allowNull: false
    }
  }, {
    tableName: 'tbl_sessions'
  });
};
