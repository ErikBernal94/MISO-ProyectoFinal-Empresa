var logicaMetadata = require ('../logic/metadata.logic');

var express = require('express');

var router = express.Router();

router.get('/', async function(req, res) {
    var result = await logicaMetadata.obtener();
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});

module.exports = router;


