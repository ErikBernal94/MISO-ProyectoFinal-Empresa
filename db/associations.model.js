const { proyecto } = require("./proyecto.model");
const { rol } = require("./rol.model");


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