
const logic = require('../logic/proyecto.logic');
const data = require("../data/proyecto.data");
jest.mock("../data/proyecto.data");

const proyecto = {
    nombre: "proyecto",
    descripcion: "descripcion de proyecto",
    rolesProyecto:[1],
    habilidadesBlandas: [1],
    habilidadesTecnicas: [1,2],
    id_estado: 1,
    id_empresa:1
}

describe('obtener', () =>{
    it('debería insertar proyecto correctamente', async ()=>{

        const result = await logic.crear(proyecto);

        expect(result).toEqual("Informacion de proyecto actualizada/insertada");
    });
    
});