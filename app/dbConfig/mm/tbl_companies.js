/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_companies', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    currency: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_format: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outlet_id: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    }
  }, {
    tableName: 'tbl_companies'
  });
};
