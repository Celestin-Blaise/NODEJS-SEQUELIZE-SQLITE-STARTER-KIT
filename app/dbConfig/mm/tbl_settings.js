/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_settings', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_format: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    time_zone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_settings'
  });
};
