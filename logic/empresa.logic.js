const empresaData = require ('../data/empresa.data');
const usuarioData = require('../data/usuario.data');

class EmpresaLogic {
    constructor(){

    }

    obtener(correo){
        return new Promise(async (resolve,reject)=>{
            try {
                var empresa = await empresaData.obtener(correo);
                if(!empresa){
                    let usuario = await usuarioData.obtener(correo);
                    empresa = { usuario: usuario };
                }
                resolve(empresa);    
            } catch (error) {
                reject(error);
            }
            
        })
    }

    crear(empresa){
        return new Promise(async (resolve,reject)=>{
            try {
                const usuariosBD = await usuarioData.obtener(empresa.email);
                if(!usuariosBD || usuariosBD.length === 0) {
                    reject('El usuario no esta registrado');
                    return;
                }
                console.log(usuariosBD);
                await empresaData.insertar(empresa, usuariosBD);
                resolve('Informacion de empresa actualizada/insertada');    
            } catch (error) {
                reject(error);
            }
            
        })
    }

}

const empresa = new EmpresaLogic()

module.exports = empresa