const sequelize = require("../db/db")
const { Op } = require("sequelize");
const {rol, proyectoRol} = require("../db/rol.model");
const {habilidad_blanda, habilidad_blanda_proyecto} = require("../db/habilidad_blanda.model")
const {habilidad_tecnica, habilidad_tecnica_proyecto} = require("../db/habilidad_tecnica.model");
const { estado } = require("../db/estado.model");
const {empresa} = require("../db/empresa.model");
const {proyecto} = require("../db/proyecto.model");

class ProyectoData {
    constructor(){}

    async insertarProyecto(proyectoCrear){
      return new Promise(async (resolve, reject)=>{
          try {
            let proyectExist = await proyecto.findAll({where: {nombre: proyectoCrear.nombre, id_empresa: proyectoCrear.id_empresa}});
            if (proyectExist.length > 0)reject('El proyecto ya existe')
            console.log(proyectoCrear)
            let [proyectoDB, created] = await proyecto.findOrCreate({where: {nombre: proyectoCrear.nombre}, defaults: proyectoCrear});
            if(!created) reject({
                error: 'Error creando proyecto',
                statusCode: 400,
            })
            
            for(let rolProyecto of proyectoCrear.rolesProyecto) {       
                let rolesBD =  await proyectoDB.addRolesProyecto(rolProyecto.id_rol);   
                if(rolProyecto.habilidadesBlandas.length > 0){
                    let habilidadesBlandasDB = await habilidad_blanda.findAll({where: {id: {[Op.in]: rolProyecto.habilidadesBlandas}}});
                    if(habilidadesBlandasDB.length === 0) reject('Las habilidades blandas no existen')
                }
                if(rolProyecto.habilidadesTecnicas.length > 0) {
                    let habilidadesTecnicasDB = await habilidad_tecnica.findAll({where: {id: {[Op.in]: rolProyecto.habilidadesTecnicas}}});
                    if(habilidadesTecnicasDB.length === 0) reject('Las habilidades blandas no existen')
                }               

                const proyectoRol = rolesBD[0].dataValues
                for(let hb of rolProyecto.habilidadesBlandas){
                    let [rolHB, created] = await habilidad_blanda_proyecto.findOrCreate({
                        where: { id_proyecto_rol: proyectoRol.id, id_habilidad_blanda: hb },
                        defaults: {
                            id_proyecto_rol: proyectoRol.id,
                            id_habilidad_blanda: hb
                        }
                    });
                    if(!created) reject({
                        error: 'Error creando proyecto',
                        statusCode: 400,
                    })
                }
                for(let ht of rolProyecto.habilidadesTecnicas){
                    let [rolHB, created] = await habilidad_tecnica_proyecto.findOrCreate({
                        where: { id_proyecto_rol: proyectoRol.id, id_habilidad_tecnica: ht},
                        defaults: {
                            id_proyecto_rol: proyectoRol.id,
                            id_habilidad_tecnica: ht
                        }
                    });
                    if(!created)reject({
                        error: 'Error creando proyecto',
                        statusCode: 400,
                    })                    
                }                
            }
            resolve(proyectoDB);    
          } catch (error) {
              console.log(error);
              reject('Error creando proyecto')
          }
        resolve('success');
          
      });
  }

  obtener(idEmpresa){
    return new Promise(async (resolve,reject)=>{
        try {
            let empresaExiste = await empresa.findAll({where: {id: idEmpresa}});
            if (empresaExiste.length <= 0)reject('la empresa no existe')
            var proyectoDB = await proyecto.findAll({
                include: [
                    {
                        model: rol,
                        required: false,
                        through: {
                            attributes: []
                        },
                        as: "rolesProyecto"
                    }
                ],
                where: {id_empresa:idEmpresa}
            });
            console.log(proyectoDB)
            resolve(proyectoDB);    
        } catch (error) {
            reject(error);
        }
        
    });

    
    }

    obtenerPorId(idProyecto){
        return new Promise(async (resolve,reject)=>{
            let proyecto = await proyectoModel.findByPk(idProyecto);
            resolve(proyecto);
        });
    }
}

const proyectoData = new ProyectoData();

module.exports = proyectoData;