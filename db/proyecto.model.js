const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const { estado } = require('./estado.model');
const { rol } = require('./rol.model');
const {empresa} = require('./empresa.model')

const proyecto = sequelize.define('proyecto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    id_estado: {
        type: DataTypes.INTEGER
    },
    id_empresa: {
      type: DataTypes.INTEGER
  }
  }, {
    tableName: 'proyecto',
    timestamps: false,
    schema: 'empresa'
  });

estado.hasOne(proyecto, {foreignKey: 'id_estado'});
proyecto.belongsTo(estado, {foreignKey: 'id_estado'});

empresa.hasOne(proyecto, {foreignKey: 'id_empresa', as: 'proyectos'});
proyecto.belongsTo(empresa, {foreignKey: 'id_empresa'});

proyecto.belongsToMany(rol, {
  through: 'proyectoRol',
  foreignKey: 'id_proyecto',
  otherKey: 'id_rol',
  as: 'rolesProyecto'
});
rol.belongsToMany(proyecto, {
  through: 'proyectoRol',
  foreignKey: 'id_rol',
  otherKey: 'id_proyecto'
});

module.exports = { proyecto };