const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const habilidad_tecnica = sequelize.define('habilidadTecnica', {
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
    tableName: 'habilidad_tecnica',
    timestamps: false,
    schema: 'metadata'
});

const habilidad_tecnica_proyecto = sequelize.define('habilidadTecnicaProyecto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_proyecto: {
        type: DataTypes.STRING
    },
    id_habilidad_tecnica: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'proyecto_habilidad_tecnica',
    timestamps: false,
    schema: 'empresa'
});

module.exports = { habilidad_tecnica , habilidad_tecnica_proyecto };