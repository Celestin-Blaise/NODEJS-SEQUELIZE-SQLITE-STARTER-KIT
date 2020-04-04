/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_admin_user_menus', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    menu_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    controller_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_admin_user_menus'
  });
};
