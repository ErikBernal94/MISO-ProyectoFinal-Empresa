
const logic = require('../logic/metadata.logic');

jest.mock("../data/metadata.data");

const metadata = {
    areas_negocio: [
        {
            id: 1,
            descripcion: "SEO"
        },
        {
            id: 2,
            descripcion: "Analitica digital"
        }
    ],
    tipos_empresa: [
        {
            id: 1,
            tipo_empresa: "Retail"
        },
        {
            id: 2,
            tipo_empresa: "Marketing digital"
        }
    ],
    paises: [
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
    ]
};

describe('obtener', () =>{
    it('debería obtener metadata correctamente', async ()=>{

        const result = await logic.obtener();

        expect(result).toEqual(metadata);
    });
});