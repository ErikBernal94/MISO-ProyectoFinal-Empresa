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

const areaNegocioEmpresa = sequelize.define('areaNegocioEmpresa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_area_negocio: {
        type: DataTypes.INTEGER
    },
    id_empresa: {
        type: DataTypes.INTEGER
    }
  }, {
    tableName: 'area_negocio_empresa',
    timestamps: false,
    schema: 'empresa'
});

module.exports = { areaNegocio , areaNegocioEmpresa};
