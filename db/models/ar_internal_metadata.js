const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    key: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "key",
      autoIncrement: false
    },
    value: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "value",
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
    }
  };
  const options = {
    tableName: "ar_internal_metadata",
    comment: "",
    indexes: []
  };
  const ArInternalMetadataModel = sequelize.define("ar_internal_metadata_model", attributes, options);
  return ArInternalMetadataModel;
};