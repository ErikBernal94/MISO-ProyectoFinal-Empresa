var logicaempresa = require ('../logic/empresa.logic');

var express = require('express');
const Joi = require('joi');

var router = express.Router();

const schemaGet = Joi.object({
    correoempresa: Joi.string().min(6).max(200).required().email()
});
const schemaPost = Joi.object({
    email: Joi.string().min(6).max(200).required().email(),
    id_tipo_empresa: Joi.number().integer().min(0).required(),
    ciudades: Joi.array().required(),
    areasNegocio: Joi.array().required()
});



router.get('/info/:correoempresa', async function(req, res) {

    const { error } = schemaGet.validate(req.params)
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
      }
    const { correoempresa } = req.params
    var result = await logicaempresa.obtener(correoempresa);
    if(!result){
        res.status(400).send();    
    }
    res.status(200).send(result);
});

router.post('/', async function(req, res) {
    try {
        const { error } = schemaPost.validate(req.body)
        if (error) {
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        const empresaIn = req.body
        var result = await logicaempresa.crear(empresaIn);
        if(!result){
            res.status(400).send();    
        }
        res.status(200).send(result);    
    } catch (error) {
        res.status(500).send(error);
    }
    
});

module.exports = router;


