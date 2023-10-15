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

module.exports = { ciudad };