const contratoData = require("../data/contrato.data");
const metadataData = require("../data/metadata.data");
const proyectoData = require("../data/proyecto.data");

class ContratoLogic {
    constructor(){

    }

    crear(contrato){
        return new Promise(async (resolve,reject)=>{
            try {
                let contratoExistente = await contratoData.obtener(contrato.idUsuarioEmpleado, contrato.idUsuarioEmpresa)
                console.log(contratoExistente);
                if(contratoExistente.length > 0) {
                    reject({codigoError: 419, mensaje:'El contrato ya existe para el empleado y la empresa ingresados'})
                    return;
                }
                let rolExistente = await metadataData.obtenerRol(contrato.idRol);
                if(!rolExistente || rolExistente.length === 0) {
                    reject({codigoError: 419, mensaje:'El rol no existe'});
                    return;
                }
                let proyectoExistente = await proyectoData.obtenerPorId(contrato.idProyecto)
                if(!proyectoExistente || proyectoExistente.length === 0){
                    reject({codigoError: 419, mensaje:'El proyecto no existe'});
                    return;
                } 
                await contratoData.insertar(contrato)                
                resolve('Informacion de contrato insertada');    
            } catch (error) {
                console.log(error);
                reject({codigoError: 500, mensaje:error});
            }
            
        })
    }

    obtenerPorIdEmpleado(idEmpleado){
        return new Promise(async (resolve,reject)=>{
            try {
                let contratoExistente = await contratoData.obtenerPorIdEmpleado(idEmpleado);
                resolve(contratoExistente);    
            } catch (error) {
                reject({codigoError: 500, mensaje:error});
            }
            
        })
    }

    obtenerPorIdEmpresa(idEmpresa){
        return new Promise(async (resolve,reject)=>{
            try {
                let contratoExistente = await contratoData.obtenerPorIdEmpresa(idEmpresa);
                resolve(contratoExistente);    
            } catch (error) {
                reject({codigoError: 500, mensaje:error});
            }
            
        })
    }

}

const contrato = new ContratoLogic()

module.exports = contrato