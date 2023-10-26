const metadataData = require('../data/metadata.data');

class MetadataLogic {
    constructor() {

    }

    obtener(language) {
        return new Promise(async (resolve, reject) => {
            var metadata = await metadataData.obtener(language);
            resolve(metadata);
        })
    }

}

const metadataLogic = new MetadataLogic();

module.exports = metadataLogic;
