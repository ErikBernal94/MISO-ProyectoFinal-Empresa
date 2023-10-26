const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const areaNegocio = sequelize.define('areaNegocio', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    descripcion_en: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'area_negocio',
    timestamps: false,
    schema: 'metadata'
});

module.exports = { areaNegocio };
