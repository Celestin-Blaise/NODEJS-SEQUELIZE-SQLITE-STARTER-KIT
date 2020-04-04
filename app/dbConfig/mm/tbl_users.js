/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_users', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email_address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    will_login: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'No'
    },
    role: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    outlet_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    account_creation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'english'
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active_status: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'Active'
    },
    del_status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'Live'
    }
  }, {
    tableName: 'tbl_users'
  });
};
