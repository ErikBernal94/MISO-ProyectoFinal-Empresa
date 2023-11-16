const { DataTypes } = require('sequelize');
const sequelize = require("./db");


const evaluacion_desempeño = sequelize.define('evaluacion_desempeño', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    id_contrato: {
        type: DataTypes.INTEGER
    }
  }, {
    tableName: 'evaluacion_desempeño',
    timestamps: false,
    schema: 'evaluacion'
});

module.exports = { evaluacion_desempeño };