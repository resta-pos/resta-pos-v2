const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    billing_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "billing_date",
      autoIncrement: false
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "total",
      autoIncrement: false
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "order_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "orders_model"
      }
    },
    cash_balance_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cash_balance_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "cash_balances_model"
      }
    },
    to_go_total: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "to_go_total",
      autoIncrement: false
    },
    here_total: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "here_total",
      autoIncrement: false
    },
    express_total: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "express_total",
      autoIncrement: false
    },
    num_table: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "num_table",
      autoIncrement: false
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.0",
      comment: null,
      primaryKey: false,
      field: "discount",
      autoIncrement: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "status",
      autoIncrement: false
    },
    subtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subtotal",
      autoIncrement: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    },
    charge_to_express: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "charge_to_express",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "invoices",
    comment: "",
    indexes: [{
      name: "index_invoices_on_cash_balance_id",
      unique: false,
      fields: ["cash_balance_id"]
    }, {
      name: "index_invoices_on_order_id",
      unique: false,
      fields: ["order_id"]
    }]
  };
  const InvoicesModel = sequelize.define("invoices_model", attributes, options);
  return InvoicesModel;
};