var express = require('express');
var router = express.Router();
var models = require('../models');
var Persona = models.Persona;

/**
* @api {get} / Get all Personas
* @apiName GetPersonas
* @apiGroup Personas
* @apiSuccess {String} Nombre Apellido de la persona.
*/
router.get('/', (req, res, next) => {
  Persona.findAll().then((result) => {
    res.send(result);
  });
});

/**
* @api {delete} /:id Borra Persona dado ID
* @apiName DeletePersonas
* @apiGroup Personas
* @apiSuccess {String} adios .
*/
router.delete('/:id', function(req, res, next) {
  Persona.destroy({
    where: {
      id:req.params.id
    }
  }).then(function(result) {
    res.send('adios' + result);
  });
});
/**
* @api {post} / Crea Persona
* @apiName CreatePersona
* @apiGroup Personas
* 
* @apiParam {Number} cedula Cédula de la Persona.
* @apiParam {String} nombre Nombre de la Persona.
* @apiParam {String} apellido Apellido de la Persona.
* @apiSuccess {Number} ID id de la persona.
* @apiSuccess {Number} cedula cedula de la persona.
* @apiSuccess {String} nombre nombre.
* @apiSuccess {String} apellido apellido.
*/
router.post('/', (req, res, next) => {
  Persona.create(req.body).then((result)=>{
      res.send(result);
  });
});


module.exports = router;
