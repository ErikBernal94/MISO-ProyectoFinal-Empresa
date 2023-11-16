const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const { evaluacion_desempeño } = require('./evaluacion_desempeño.model');
const usuario = require('./usuario.model');


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

contrato.hasOne(evaluacion_desempeño, {foreignKey: 'id_contrato'});
evaluacion_desempeño.belongsTo(contrato, {foreignKey: 'id_contrato'});
usuario.hasOne(contrato, {foreignKey: 'id_usuario_empresa'})
contrato.belongsTo(usuario, {foreignKey: 'id_usuario_empresa', as: 'empresa'})
usuario.hasOne(contrato, {foreignKey: 'id_usuario_empleado'})
contrato.belongsTo(usuario, {foreignKey: 'id_usuario_empleado', as: 'empleado'})

module.exports = { contrato };