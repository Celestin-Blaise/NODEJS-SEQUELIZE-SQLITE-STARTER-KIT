/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_notification_bar_kitchen_panel', {
    id: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    notification: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sale_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    },
    outlet_id: {
      type: DataTypes.INTEGER(15),
      allowNull: false
    }
  }, {
    tableName: 'tbl_notification_bar_kitchen_panel'
  });
};
