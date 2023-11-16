var logicacontrato = require ('../logic/contrato.logic');

var express = require('express');
const Joi = require('joi');

var router = express.Router();

const schemaPost = Joi.object({
    idUsuarioEmpresa: Joi.number().integer().min(0).required(),
    idUsuarioEmpleado: Joi.number().integer().min(0).required(),
    idRol: Joi.number().integer().min(0).required(),
    idProyecto: Joi.number().integer().min(0).required()
});



router.post('/', async function(req, res) {
    try {
        const { error } = schemaPost.validate(req.body)
        if (error) {
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }
        const contratoIn = req.body
        var result = await logicacontrato.crear(contratoIn);
        if(!result){
            res.status(400).send();    
        }
        res.status(200).json(result);    
    } catch (error) {
        res.status(error.codigoError).send(error.mensaje);
    }
    
});

router.get('/:idTipoUsuario/:idUsuario', async function(req, res) {
    try {
        const { idTipoUsuario, idUsuario } = req.params
        let result = null;
        if(idTipoUsuario == 2)
            result = await logicacontrato.obtenerPorIdEmpleado(idUsuario);
        else if(idTipoUsuario == 3)
            result = await logicacontrato.obtenerPorIdEmpresa(idUsuario);
        if(!result){
            res.status(400).send();    
        }
        res.status(200).json(result);    
    } catch (error) {
        res.status(error.codigoError).send(error.mensaje);
    }
    
});

module.exports = router;


