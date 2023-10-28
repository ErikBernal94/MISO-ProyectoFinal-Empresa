const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const rol = sequelize.define('rol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rol: {
        type: DataTypes.STRING
    },
    rol_en: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'rol',
    timestamps: false,
    schema: 'metadata'
});

const proyecto_rol = sequelize.define('proyectoRol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_proyecto: {
        type: DataTypes.STRING
    },
    id_rol: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'proyecto_rol',
    timestamps: false,
    schema: 'empresa',
});

module.exports = { rol ,proyecto_rol };