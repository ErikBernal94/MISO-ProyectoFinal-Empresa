const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const estado = sequelize.define('estado', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    estado: {
        type: DataTypes.STRING
    },
    estado_en: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'estado',
    timestamps: false,
    schema: 'metadata'
});

module.exports = { estado };