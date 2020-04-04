/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_temp_kot', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    temp_kot_info: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'tbl_temp_kot'
  });
};
