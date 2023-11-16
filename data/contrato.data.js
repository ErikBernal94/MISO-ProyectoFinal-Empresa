const { Op } = require("sequelize");
const { contrato } = require("../db/contrato.model");

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
}

const contratoData = new ContratoData();

module.exports = contratoData;