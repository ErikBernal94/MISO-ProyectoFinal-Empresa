const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const { habilidad_blanda } = require('./habilidad_blanda.model');
const { habilidad_tecnica } = require('./habilidad_tecnica.model');
const proyecto = require('./proyecto.model');

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

const proyectoRol = sequelize.define('proyectoRol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_proyecto: {
        type: DataTypes.INTEGER
    },
    id_rol: {
        type: DataTypes.INTEGER
    }
  }, {
    tableName: 'proyecto_rol',
    timestamps: false,
    schema: 'empresa'
});

proyectoRol.belongsToMany(habilidad_blanda, {
    through: 'habilidadBlandaProyectoRol',
    foreignKey: 'id_proyecto_rol',
    otherKey: 'id_habilidad_blanda',
    as: 'habilidadesBlandas'
  });
habilidad_blanda.belongsToMany(proyectoRol, {
    through: 'habilidadBlandaProyectoRol',
    foreignKey: 'id_habilidad_blanda',
    otherKey: 'id_proyecto_rol'
});
proyectoRol.belongsToMany(habilidad_tecnica, {
    through: 'habilidadTecnicaProyectoRol',
    foreignKey: 'id_proyecto_rol',
    otherKey: 'id_habilidad_tecnica',
    as: 'habilidadesTecnicas'
});
habilidad_tecnica.belongsToMany(proyectoRol, {
    through: 'habilidadTecnicaProyectoRol',
    foreignKey: 'id_habilidad_tecnica',
    otherKey: 'id_proyecto_rol'
});


module.exports = { rol , proyectoRol};