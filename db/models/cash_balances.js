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
    closing_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "closing_date",
      autoIncrement: false
    },
    eat_here_total: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "eat_here_total",
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
    to_go_total: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "to_go_total",
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "updated_at",
      autoIncrement: false
    },
    credit_payment_invoices_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "credit_payment_invoices_quantity",
      autoIncrement: false
    },
    cash_payment_invoices_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cash_payment_invoices_quantity",
      autoIncrement: false
    },
    card_payment_invoices_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "card_payment_invoices_quantity",
      autoIncrement: false
    },
    general_invoices_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "general_invoices_quantity",
      autoIncrement: false
    },
    eat_here_taxes_total: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "eat_here_taxes_total",
      autoIncrement: false
    },
    express_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "express_count",
      autoIncrement: false
    },
    anulled_invoices_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "anulled_invoices_quantity",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "cash_balances",
    comment: "",
    indexes: []
  };
  const CashBalancesModel = sequelize.define("cash_balances_model", attributes, options);
  return CashBalancesModel;
};