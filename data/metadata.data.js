const { areaNegocio } = require("../db/area_negocio.model");
const { ciudad } = require("../db/ciudad.model");
const { pais } = require("../db/pais.model");
const { tipoEmpresa } = require("../db/tipo_empresa.model");

class MetadataData {
    constructor() {}

    obtener(language) {
        const filter_negocio = `descripcion${language ? '_' + language : ''}`;
        const filter_empresa= `tipo_empresa${language ? '_' + language : ''}`;
        const filter_pais= `pais${language ? '_' + language : ''}`;

        return new Promise(async (resolve,reject)=>{
            let metadata = {
                areas_negocio : await areaNegocio.findAll({attributes: ['id',   filter_negocio]}),
                tipos_empresa: await tipoEmpresa.findAll({attributes: ['id', filter_empresa]}),
                paises: await pais.findAll({
                    attributes: ["id", filter_pais],
                    include: [
                        {
                          model: ciudad,
                          attributes: ["id", "ciudad", "id_pais"],
                        },
                      ],
                    }) 
            }
            resolve(metadata);
        });
    }
}

const metadataData = new MetadataData();

module.exports = metadataData;
