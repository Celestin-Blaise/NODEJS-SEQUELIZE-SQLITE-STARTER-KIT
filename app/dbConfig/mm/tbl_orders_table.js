/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_orders_table', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    persons: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    booking_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sale_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    sale_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    outlet_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    table_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    del_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_orders_table'
  });
};
