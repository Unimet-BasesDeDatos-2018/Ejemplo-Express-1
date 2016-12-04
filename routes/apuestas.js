var express = require('express');
var router = express.Router();

var models = require('../models');
var Apuesta = models.Apuesta;
var Persona = models.Persona;

/**
* @api {get} /apuestas 1. Get todas las Apuestas
* @apiName GetApuestas
* @apiGroup Apuestas
* 
* @apiSuccess {Number} apostador.Nombre Nombre del Apostador.
* @apiSuccess {Number} objetivo.Nombre Nombre del Objetivo.
* @apiSuccess {Number} resultado Resultado esperado.
* @apiSuccess {Number} monto Cantidad apostada.
* @apiParamExample {json} Ejemplo:
* [{
*   "monto":100,
*   "resultado":10,
*   "apostador":{
*     "nombre":"bernardo"
*   },
*   "objetivo":{
*     "nombre":"hola"
*   }
*  }]
*/
router.get('/', (req, res, next) => {
  Apuesta.findAll({ 
    attributes:['monto','resultado'], 
    include: [{
      model:Persona,
      as: 'apostador',
      attributes:['nombre']
    },{
      model:Persona,
      as: 'objetivo',
      attributes:['nombre']
    }]
  }).then((result) => {
     res.send(result);
  });
});

/**
* @api {post} /apuestas 2. Crea Apuesta
* @apiName CreateApuesta
* @apiGroup Apuestas
* 
* @apiParam {Number} apostadorId Id de la persona Apostador.
* @apiParam {Number} objetivoId Id de la persona Objetivo.
* @apiParam {Number} resultado Valor esperado.
* @apiParam {Number} apuesta Cantidad apostada.
* @apiParamExample {json} Ejemplo:
*   {
*     "apostadorId":1,
*     "objetivoId":2,
*     "resultado":10,
*     "apuesta":100
*   }
* @apiSampleRequest /apuestas
* @apiSuccess {Number} apostadorId Id de la persona Apostador.
* @apiSuccess {Number} objetivoId Id de la persona Objetivo.
* @apiSuccess {Number} resultado Valor esperado.
* @apiSuccess {Number} apuesta Cantidad apostada.
* @apiSuccess {Date} updatedAt Actualización.
* @apiSuccess {Date} createdAt Creación.
*/
router.post('/', (req, res, next) => {
    console.log(req.body);
    Apuesta.create(req.body).then((result)=>{
      res.send(result);
    });
});

/**
* @api {delete} /apuestas/:id 3. Borra Apuesta dado ID
* @apiName DeleteApuesta
* @apiGroup Apuestas
* 
* @apiSuccess {Numbre} Number Cantidad de casillas borradas.
*/
router.delete('/:id', function(req, res, next) {
  Apuesta.destroy({
    where: {
      id:req.params.id
    }
  }).then(function(result) {
    res.send('adios' + result);
  });
});

module.exports = router;
