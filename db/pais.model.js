const { DataTypes } = require('sequelize');
const { ciudad } = require('./ciudad.model');
const sequelize = require("./db")


const pais = sequelize.define('pais', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pais: {
        type: DataTypes.STRING
    },
    pais_en: {
        type: DataTypes.STRING
    }
  }, {
    tableName: 'pais',
    timestamps: false,
    schema: 'metadata'
});

pais.hasMany(ciudad, {foreignKey: 'id_pais'});
ciudad.belongsTo(pais, {foreignKey: 'id_pais'});

module.exports = { pais };