const { DataTypes } = require('sequelize');
const { ciudad } = require('./ciudad.model');
const sequelize = require("./db");
const usuario = require('./usuario.model');
const { tipoEmpresa } = require('./tipo_empresa.model');
const { areaNegocio } = require('./area_negocio.model');


const empresa = sequelize.define('empresa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_tipo_empresa: {
        type: DataTypes.INTEGER
    },
    id_usuario: {
        type: DataTypes.INTEGER
    }
  }, {
    tableName: 'empresa',
    timestamps: false,
    schema: 'empresa'
});

usuario.hasOne(empresa, {foreignKey: 'id_usuario'});
empresa.belongsTo(usuario, {foreignKey: 'id_usuario'});
tipoEmpresa.hasOne(empresa, {foreignKey: 'id_tipo_empresa'});
empresa.belongsTo(tipoEmpresa, {foreignKey: 'id_tipo_empresa'});

empresa.belongsToMany(areaNegocio, {
    through: 'areaNegocioEmpresa',
    foreignKey: 'id_empresa',
    otherKey: 'id_area_negocio',
    as: 'areasNegocio'
  });
areaNegocio.belongsToMany(empresa, {
    through: 'areaNegocioEmpresa',
    foreignKey: 'id_area_negocio',
    otherKey: 'id_empresa'
});

empresa.belongsToMany(ciudad, {
    through: 'ciudadEmpresa',
    foreignKey: 'id_empresa',
    otherKey: 'id_ciudad',
    as: 'ciudades'
  });
ciudad.belongsToMany(empresa, {
    through: 'ciudadEmpresa',
    foreignKey: 'id_ciudad',
    otherKey: 'id_empresa'
});

module.exports = { empresa };