var proyectoData = require ('../data/proyecto.data.js');


class ProyectoLogic {
    constructor() {}

    crear(proyecto){
        return new Promise(async (resolve,reject)=>{
            try {
                await proyectoData.insertarProyecto(proyecto);
                resolve('Informacion de proyecto actualizada/insertada');    
            } catch (error) {
                reject(error);
            }
            
        })
    }

    obtenerTodos(idEmpresa){
        return new Promise(async (resolve,reject)=>{
            try {
                var proyecto = await proyectoData.obtener(idEmpresa);
                console.log(proyecto)
                resolve(proyecto);    
            } catch (error) {
                reject(error);
            }
            
        })
    }

}

const proyectoLogic = new ProyectoLogic();

module.exports = proyectoLogic;
