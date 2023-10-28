const { Op } = require("sequelize");
const usuario = require("../db/usuario.model");
const { tipoEmpresa } = require("../db/tipo_empresa.model");
const { areaNegocio } = require("../db/area_negocio.model");
const { ciudad } = require("../db/ciudad.model");
const { pais } = require("../db/pais.model");
const { empresa } = require("../db/empresa.model");
class EmpresaData{
    constructor() {

    }

    obtener(correoEmpresa){
        return new Promise(async (resolve,reject)=>{
            try {
                var empresaDB = await empresa.findAll({
                    attributes: {exclude: ["id_usuario"]},
                    include: [
                        {
                            model: usuario,
                            required: true,
                            attributes: {exclude: ["contrasena"]},
                            where: {
                                email: correoEmpresa
                            }
                        },
                        {
                            model: tipoEmpresa,
                            required: false
                        },
                        {
                            model: areaNegocio,
                            required: false,
                            through: {
                                attributes: []
                            },
                            as: "areasNegocio"
                        },
                        {
                            model: ciudad,
                            required: false,
                            through: {
                                attributes: []
                            },
                            include:[
                                {
                                    model: pais,
                                    required: false
                                }      
                            ],
                            as: 'ciudades'
                        }
    
                    ]
                });
                resolve(empresaDB[0]);    
            } catch (error) {
                reject(error);
            }
            
        });
    }

    insertar(empresaIn, usuario){
        return new Promise(async (resolve, reject)=>{
            try {
                let empresaDB = await empresa.findOrCreate({where: {id_usuario: usuario.id}, defaults: empresaIn});
                empresaDB = empresaDB[0];
            
                let ciudadesDB = await ciudad.findAll({where: {id: {[Op.in]: empresaIn.ciudades}}});
                for(let ciudad of ciudadesDB){
                    await empresaDB.addCiudade(ciudad);
                }
                let areasNegocioDB = await areaNegocio.findAll({where: {id: {[Op.in]: empresaIn.areasNegocio}}});
                for(let an of areasNegocioDB){
                    await empresaDB.addAreasNegocio(an);
                }
                resolve(empresaDB);    
            } catch (error) {
                console.log(error);
                reject(error);
            }
            
        });
    }
}

const empresaData = new EmpresaData();

module.exports = empresaData;