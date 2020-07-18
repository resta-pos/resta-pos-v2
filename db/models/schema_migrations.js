const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    version: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "version",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "schema_migrations",
    comment: "",
    indexes: []
  };
  const SchemaMigrationsModel = sequelize.define("schema_migrations_model", attributes, options);
  return SchemaMigrationsModel;
};