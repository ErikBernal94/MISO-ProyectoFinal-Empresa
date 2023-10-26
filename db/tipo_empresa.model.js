const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const tipoEmpresa = sequelize.define('tipoEmpresa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo_empresa: {
        type: DataTypes.STRING
    },
    tipo_empresa_en: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'tipo_empresa',
    timestamps: false,
    schema: 'metadata'
});

module.exports = { tipoEmpresa };