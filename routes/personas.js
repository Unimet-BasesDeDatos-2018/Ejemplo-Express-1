var express = require('express');
var router = express.Router();
var models = require('../models');
var Persona = models.Persona;

/**
* @api {get} /personas 1. Get all Personas
* @apiName GetPersonas
* @apiGroup Personas
* @apiParamExample {json} Ejemplo:
* [{
*   "id": 1,
*   "apellido": "garcia",
*   "nombre": "bernardo",
*   "cedula": 1,
*   "createdAt": "2016-12-04T02:30:57.000Z",
*   "updatedAt": "2016-12-04T02:30:57.000Z"
* }]
* @apiSuccess {Number} id Id de la persona.
* @apiSuccess {Number} cedula cedula de la persona.
* @apiSuccess {String} nombre Nombre de la Persona.
* @apiSuccess {String} apellido Apellido de la Persona.
* @apiSuccess {Date} updatedAt Actualización.
* @apiSuccess {Date} createdAt Creación.
*/
router.get('/', (req, res, next) => {
  Persona.findAll().then((result) => {
    res.send(result);
  });
});

/**
* @api {delete} /personas/:id 3. Borra Persona dado ID
* @apiName DeletePersonas
* @apiGroup Personas
* 
* @apiSuccess {Numbre} Number Cantidad de casillas borradas.
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
* @api {post} /personas 2. Crea Persona
* @apiName CreatePersona
* @apiGroup Personas
* 
* @apiParam {Number} cedula Cédula de la Persona.
* @apiParam {String} nombre Nombre de la Persona.
* @apiParam {String} apellido Apellido de la Persona.
* 
* @apiSuccess {Number} id Id de la persona.
* @apiSuccess {Number} cedula cedula de la persona.
* @apiSuccess {String} nombre Nombre de la Persona.
* @apiSuccess {String} apellido Apellido de la Persona.
* @apiSuccess {Date} updatedAt Actualización.
* @apiSuccess {Date} createdAt Creación.
* 
* @apiParamExample {json}
* {
*   "id": 1,
*   "apellido": "garcia",
*   "nombre": "bernardo",
*   "cedula": 1,
*   "createdAt": "2016-12-04T02:30:57.000Z",
*   "updatedAt": "2016-12-04T02:30:57.000Z"
* }
*/
router.post('/', (req, res, next) => {
  Persona.create(req.body).then((result)=>{
      res.send(result);
  });
});


module.exports = router;
