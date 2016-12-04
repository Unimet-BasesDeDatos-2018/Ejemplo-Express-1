var express = require('express');
var router  = express.Router();
var models = require('../models');
var Apuesta = models.Apuesta;
var Persona = models.Persona;

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
        res.render('deadpool', { title: 'Deadpool', apuestas: JSON.stringify(result) });
    });
});


module.exports = router;
