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

router.get('/apuestas', (req, res, next) => {
  Apuesta.findAll({ include: [{ all: true}] }).then((result) => {
     res.send(result);
  });
});


router.post('/apuestas', (req, res, next) => {
    console.log(req.body);
    Apuesta.create(req.body).then((result)=>{
      res.send(result);
    });
});

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
