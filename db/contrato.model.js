const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const contrato = sequelize.define('contrato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_usuario_empresa: {
        type: DataTypes.INTEGER
    },
    id_usuario_empleado: {
        type: DataTypes.INTEGER
    },
    id_proyecto: {
        type: DataTypes.INTEGER
    },
    id_rol: {
        type: DataTypes.INTEGER
    },
    activo: {
        type: DataTypes.BOOLEAN
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_fin: {
        type: DataTypes.DATE
    }
  }, {
    tableName: 'contrato',
    timestamps: false,
    schema: 'empresa'
});

module.exports = { contrato };