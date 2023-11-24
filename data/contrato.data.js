const { Op } = require("sequelize");
const { contrato } = require("../db/contrato.model");
const usuario = require("../db/usuario.model");
const { evaluacion_desempeño } = require("../db/evaluacion_desempeño.model");

class ContratoData{
    constructor() {

    }

    obtener(idUsuarioEmpleado,idUsuarioEmpresa){
        return new Promise(async (resolve,reject)=>{
            try {
                let contratoDB = await contrato.findAll({where: {id_usuario_empleado: idUsuarioEmpleado, id_usuario_empresa: idUsuarioEmpresa, activo: true}});
                resolve(contratoDB);    
            } catch (error) {
                console.log(error);
                reject(error);
            }
            
        });
    }

    insertar(contratoInput){
        return new Promise(async (resolve, reject)=>{
            try {
                let contratoDB = await contrato.create({
                    id_usuario_empleado: contratoInput.idUsuarioEmpleado, 
                    id_usuario_empresa: contratoInput.idUsuarioEmpresa, 
                    id_rol: contratoInput.idRol, 
                    id_proyecto: contratoInput.idProyecto,
                    activo: true 
                })
                resolve(contratoDB);    
            } catch (error) {
                console.log(error);
                reject(error);
            }
            
        });
    }

    obtenerPorIdEmpleado(idEmpleado){
        return new Promise(async (resolve, reject)=>{
            try {
                let contratoDB = await contrato.findAll({
                    where: {id_usuario_empleado: idEmpleado},
                    attributes: {exclude: ["id_usuario_empresa", "id_usuario_empleado", "id_proyecto", "id_rol"]},
                    include: [
                        {
                            model: usuario,
                            attributes: {exclude: ["contrasena"]},
                            as: 'empresa'
                        }, 
                        {
                            model: evaluacion_desempeño
                        }
                    ]
                })
                let contratoUnico = [];
                contratoDB.forEach(c=>{
                    if(!contratoUnico.some(cu => cu.id == c.id))
                        contratoUnico.push(c);
                });
                resolve(contratoUnico);    
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
    obtenerPorIdEmpresa(idEmpresa){
        return new Promise(async (resolve, reject)=>{
            try {
                let contratoDB = await contrato.findAll({
                    where: {id_usuario_empresa: idEmpresa},
                    attributes: {exclude: ["id_usuario_empresa", "id_usuario_empleado", "id_proyecto", "id_rol"]},
                    include: [
                        {
                            model: usuario,
                            attributes: {exclude: ["contrasena"]},
                            as: 'empleado'
                        }, 
                        {
                            model: evaluacion_desempeño
                        }
                    ]
                })
                let contratoUnico = [];
                contratoDB.forEach(c=>{
                    if(!contratoUnico.some(cu => cu.id == c.id))
                        contratoUnico.push(c);
                });
                resolve(contratoUnico);  
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
}

const contratoData = new ContratoData();

module.exports = contratoData;