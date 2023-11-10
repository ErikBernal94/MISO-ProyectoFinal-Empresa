const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const { habilidad_blanda } = require('./habilidad_blanda.model');
const { habilidad_tecnica } = require('./habilidad_tecnica.model');


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

const proyecto_rol = sequelize.define('proyectoRol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_proyecto: {
        type: DataTypes.STRING
    },
    id_rol: {
        type: DataTypes.STRING
    }
    }, {
    tableName: 'proyecto_rol',
    timestamps: false,
    schema: 'empresa',
});

proyecto_rol.belongsToMany(habilidad_blanda, {
    through: 'habilidadBlandaProyecto',
    foreignKey: 'id_proyecto_rol',
    otherKey: 'id_habilidad_blanda',
    as: 'habilidadesBlandas'
  });

habilidad_blanda.belongsToMany(proyecto_rol, {
through: 'habilidadBlandaProyecto',
foreignKey: 'id_habilidad_blanda',
otherKey: 'id_proyecto_rol'
});

proyecto_rol.belongsToMany(habilidad_tecnica, {
through: 'habilidadTecnicaProyecto',
foreignKey: 'id_proyecto_rol',
otherKey: 'id_habilidad_tecnica',
as: 'habilidadesTecnicas'
});

habilidad_tecnica.belongsToMany(proyecto_rol, {
through: 'habilidadTecnicaProyecto',
foreignKey: 'id_habilidad_tecnica',
otherKey: 'id_proyecto_rol'
});

module.exports = { rol ,proyecto_rol };