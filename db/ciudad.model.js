const { DataTypes } = require('sequelize');
const sequelize = require("./db")


const ciudad = sequelize.define('ciudad', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ciudad: {
        type: DataTypes.STRING
    },
    id_pais: {
        type: DataTypes.INTEGER
    }
  }, {
    tableName: 'ciudad',
    timestamps: false,
    schema: 'metadata'
});

const ciudadEmpresa = sequelize.define('ciudadEmpresa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_ciudad: {
        type: DataTypes.INTEGER
    },
    id_empresa: {
        type: DataTypes.INTEGER
    }
  }, {
    tableName: 'ciudad_empresa',
    timestamps: false,
    schema: 'empresa'
});

module.exports = { ciudad , ciudadEmpresa };