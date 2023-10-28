const sequelize = require("../db/db")
const { Op } = require("sequelize");
const proyectoModel = require("../db/proyecto.model");
const {rol} = require("../db/rol.model");
const {habilidad_blanda} = require("../db/habilidad_blanda.model")
const {habilidad_tecnica} = require("../db/habilidad_tecnica.model")


class ProyectoData {
    constructor(){}

    async insertarProyecto(proyecto){
      // const t = await sequelize.transaction();
      return new Promise(async (resolve, reject)=>{
          try {
            let proyectExist = await proyectoModel.findAll({where: {nombre: proyecto.nombre}});
            if (proyectExist.length > 0)reject('El proyecto ya existe')

            let [proyectoDB, created] = await proyectoModel.findOrCreate({where: {nombre: proyecto.nombre}, defaults: proyecto});
            if(!created) reject('Error creando proyecto')           
               // roles
              let rolesBD = await rol.findAll({where: {id: {[Op.in]: proyecto.rolesProyecto}}});
              for(let rol of rolesBD){
                  await proyectoDB.addRolesProyecto(rol);
              }
              //habilidades blandas
              let habilidadesBlandasDB = await habilidad_blanda.findAll({where: {id: {[Op.in]: proyecto.habilidadesBlandas}}});
              for(let hb of habilidadesBlandasDB){
                  await proyectoDB.addHabilidadesBlanda(hb);
              }
              //habilidades tecnicas
              let habilidadesTecnicasDB = await habilidad_tecnica.findAll({where: {id: {[Op.in]: proyecto.habilidadesBlandas}}});
              for(let hb of habilidadesTecnicasDB){
                  await proyectoDB.addHabilidadesTecnica(hb);
              }
              resolve(proyectoDB);    
          } catch (error) {
              console.log(error);
              reject('Error creando proyecto')
          }
        resolve('success');
          
      });
  }
}

const proyectoData = new ProyectoData();

module.exports = proyectoData;