var proyectoData = require ('../data/proyecto.data.js');


class ProyectoLogic {
    constructor() {}

    crear(proyecto){
        return new Promise(async (resolve,reject)=>{
            try {
                await proyectoData.insertarProyecto(proyecto);
                resolve('Informacion de candidato actualizada/insertada');    
            } catch (error) {
                reject(error);
            }
            
        })
    }

}

const proyectoLogic = new ProyectoLogic();

module.exports = proyectoLogic;
