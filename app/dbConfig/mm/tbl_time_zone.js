/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_time_zone', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_code: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    zone_name: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_time_zone'
  });
};
