var logicaProyecto = require ('../logic/proyecto.logic');
const Joi = require('joi');
var express = require('express');

var router = express.Router();
const schemaPost = Joi.object({
    nombre: Joi.string().min(6).max(200).required(),
    descripcion: Joi.string().max(200),
    rolesProyecto: Joi.array().required(),
    habilidadesBlandas: Joi.array().required(),
    habilidadesTecnicas: Joi.array().required(),
    id_estado: Joi.number().required(),
});

router.post('/', async function(req, res) {
    try {
        console.log('etdf');
        const { error } = schemaPost.validate(req.body)
        if (error) {
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        const proyecto = req.body
        var result = await logicaProyecto.crear(proyecto);
        if(!result){
            res.status(400).send();    
        }
        res.status(200).send(result);    
    } catch (error) {
        console.group(error);
        res.status(500).send(error);
    }
});

module.exports = router;


