/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_inventory_adjustment', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reference_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    employee_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    outlet_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_inventory_adjustment'
  });
};
