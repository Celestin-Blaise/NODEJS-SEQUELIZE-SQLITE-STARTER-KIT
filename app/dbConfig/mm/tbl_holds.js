/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_holds', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hold_no: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '000000'
    },
    total_items: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    sub_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    paid_amount: {
      type: "DOUBLE(10,2)",
      allowNull: true
    },
    due_amount: {
      type: "DOUBLE(10,2)",
      allowNull: true
    },
    due_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    disc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    disc_actual: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    vat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_payable: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    payment_method_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    table_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    total_item_discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sub_total_with_discount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sub_total_discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total_discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    delivery_charge: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    sub_total_discount_value: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sub_total_discount_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    token_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sale_date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    sale_time: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    waiter_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    outlet_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    order_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    sale_vat_objects: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    order_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_holds'
  });
};
