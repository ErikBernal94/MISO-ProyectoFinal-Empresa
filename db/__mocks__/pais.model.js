class Pais{
    constructor(){

    }

    findAll(object){
        return new Promise(async (resolve,reject)=>{
            resolve([
                {
                    id: 1,
                    pais: "Colombia",
                    ciudads: [
                        {
                            id: 1,
                            ciudad: "Bogotá",
                            id_pais: 1
                        },
                        {
                            id: 2,
                            ciudad: "Medellín",
                            id_pais: 1
                        }
                    ]
                },
                {
                    id: 2,
                    pais: "USA",
                    ciudads: [
                        {
                            id: 3,
                            ciudad: "New York",
                            id_pais: 2
                        }
                    ]
                }
            ]);
        });
    }
}

const pais = new Pais();

module.exports = { pais };