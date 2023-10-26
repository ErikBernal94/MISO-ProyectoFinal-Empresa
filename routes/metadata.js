var logicaMetadata = require ('../logic/metadata.logic');

var express = require('express');

var router = express.Router();

router.get('/', async function(req, res) {
    const language = req.query.language;
    const result = await logicaMetadata.obtener(language);
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});

module.exports = router;


