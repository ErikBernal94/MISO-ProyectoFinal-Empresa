const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const habilidad_blanda = sequelize.define('habilidadBlanda', {
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
    tableName: 'habilidad_blanda',
    timestamps: false,
    schema: 'metadata'
});

const habilidad_blanda_proyecto = sequelize.define('habilidadBlandaProyecto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_proyecto: {
        type: DataTypes.STRING
    },
    id_habilidad_blanda: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'proyecto_habilidad_blanda',
    timestamps: false,
    schema: 'empresa'
});

module.exports = { habilidad_blanda ,habilidad_blanda_proyecto };