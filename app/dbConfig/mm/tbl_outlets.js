/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_outlets', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    outlet_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outlet_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    invoice_print: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    starting_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    invoice_footer: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    collect_tax: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tax_title: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tax_registration_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tax_is_gst: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    state_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pre_or_post_payment: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: 'Post Payment'
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    del_status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_outlets'
  });
};
