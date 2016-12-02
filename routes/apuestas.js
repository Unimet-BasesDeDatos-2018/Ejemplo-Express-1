var express = require('express');
var router = express.Router();

var models = require('../models');
var Apuesta = models.Apuesta;
var Persona = models.Persona;

router.get('/', (req, res, next) => {
    Apuesta.findAll({ include: [{ all: true }] })
    .then((result) => {
        res.render('deadpool', { title: 'Deadpool', apuestas: JSON.stringify(result) });
    });
});
/**
* @api {get} / Get todas las Apuestas
* @apiName GetApuestas
* @apiGroup Apuestas
* 
* @apiSuccess {String} Nombre Nombre del Apostador.
* @apiSuccess {String} Nombre Nombre del Objetivo.
* @apiSuccess {Number} Monto Mondo apostado.
* @apiSuccess {Number} Apuesta Cantidad apostada.
*/
router.get('/apuestas', (req, res, next) => {
  Apuesta.findAll({ include: [{ all: true}] }).then((result) => {
     res.send(result);
  });
});
/**
* @api {post} /apuestas Crea Apuesta
* @apiName CreateApuesta
* @apiGroup Apuestas
* 
* @apiParam {Number} apostador_id Id de la persona Apostador.
* @apiParam {Number} objetivo_id Id de la persona Objetivo.
* @apiParam {Number} resultado Valor esperado.
* @apiParam {Number} apuesta Cantidad apostada.
* @apiSuccess {String} Body
*/
router.post('/apuestas', (req, res, next) => {
    console.log(req.body);
    Apuesta.create(req.body).then((result)=>{
      res.send(result);
    });
});
/**
* @api {delete} /:id Borra Apuesta dado ID
* @apiName DeleteApuesta
* @apiGroup Apuestas
* 
* @apiSuccess {String} adios.
*/
router.delete('/apuestas/:id', function(req, res, next) {
  Apuesta.destroy({
    where: {
      id:req.params.id
    }
  }).then(function(result) {
    res.send('adios' + result);
  });
});

module.exports = router;
