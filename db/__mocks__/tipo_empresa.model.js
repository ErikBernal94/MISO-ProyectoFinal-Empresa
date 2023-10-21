class TipoEmpresa{
    constructor(){

    }

    findAll(){
        return new Promise(async (resolve,reject)=>{
            resolve([
                {
                    id: 1,
                    tipo_empresa: "Retail"
                },
                {
                    id: 2,
                    tipo_empresa: "Marketing digital"
                }
            ]);
        });
    }
}

const tipoEmpresa = new TipoEmpresa();

module.exports = { tipoEmpresa };