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
    id_empresa: Joi.number().required(),
});

router.post('/', async function(req, res) {
    try {
        const { error } = schemaPost.validate(req.body)
        if (error) {
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        const proyecto = req.body
        var result = await logicaProyecto.crear(proyecto);
        console.log(result);
        if(!result){
            res.status(400).send();    
        }
        res.status(201).send(result);    
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/:idEmpresa', async function(req, res) {
    try {
        const { idEmpresa } = req.params
        var result = await logicaProyecto.obtenerTodos(idEmpresa);
        console.log(result);
        if(!result){
            res.status(400).send();    
        }
        res.status(200).send(result);    
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = router;


