const metadataData = require('../data/metadata.data');

class MetadataLogic {
    constructor(){

    }

    obtener(){
        return new Promise(async (resolve,reject)=>{
            var metadata = await metadataData.obtener();
            resolve(metadata);
        })
    }

}

const metadataLogic = new MetadataLogic();

module.exports = metadataLogic;