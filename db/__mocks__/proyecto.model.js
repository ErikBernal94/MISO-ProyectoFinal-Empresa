class Proyecto{
    constructor(){

    }

    findAll(object){
        return new Promise(async (resolve,reject)=>{
            resolve([
                {
                    id: 1,
                    proyecto: "Colombia",
                    ciudad: [
                        {
                            id: 1,
                            ciudad: "Bogotá",
                            id_proyecto: 1
                        },
                        {
                            id: 2,
                            ciudad: "Medellín",
                            id_proyecto: 1
                        }
                    ]
                },
                {
                    id: 2,
                    proyecto: "USA",
                    ciudad: [
                        {
                            id: 3,
                            ciudad: "New York",
                            id_proyecto: 2
                        }
                    ]
                }
            ]);
        });
    }
}

const proyecto = new Proyecto();

module.exports = { proyecto };