class AreaNegocio{
    constructor(){

    }

    findAll(){
        return new Promise(async (resolve,reject)=>{
            resolve([
                {
                    id: 1,
                    descripcion: "SEO"
                },
                {
                    id: 2,
                    descripcion: "Analitica digital"
                }
            ]);
        });
    }
}

const areaNegocio = new AreaNegocio();

module.exports = { areaNegocio };