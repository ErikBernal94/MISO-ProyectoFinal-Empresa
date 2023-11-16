class Empresa{
    constructor(){

    }

    findAll(object){
        return new Promise(async (resolve,reject)=>{
            resolve([
                {
                    id: 1,
                    empresa: "Colombia",
                    ciudad: [
                        {
                            id: 1,
                            ciudad: "Bogotá",
                            id_empresa: 1
                        },
                        {
                            id: 2,
                            ciudad: "Medellín",
                            id_empresa: 1
                        }
                    ]
                },
                {
                    id: 2,
                    empresa: "USA",
                    ciudad: [
                        {
                            id: 3,
                            ciudad: "New York",
                            id_empresa: 2
                        }
                    ]
                }
            ]);
        });
    }
}

const empresa = new Empresa();

module.exports = { empresa };