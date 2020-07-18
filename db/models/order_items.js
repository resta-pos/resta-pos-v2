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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "quantity",
      autoIncrement: false
    },
    transaction_type: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "transaction_type",
      autoIncrement: false
    },
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "item_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "items_model"
      }
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
    }
  };
  const options = {
    tableName: "order_items",
    comment: "",
    indexes: [{
      name: "index_order_items_on_item_id",
      unique: false,
      fields: ["item_id"]
    }, {
      name: "index_order_items_on_order_id",
      unique: false,
      fields: ["order_id"]
    }]
  };
  const OrderItemsModel = sequelize.define("order_items_model", attributes, options);
  return OrderItemsModel;
};