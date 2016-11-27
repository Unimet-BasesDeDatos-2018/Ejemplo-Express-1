var express = require('express');
var router = express.Router();
var models = require('../models');
var Persona = models.Persona;

/* GET users listing. */
router.get('/', (req, res, next) => {
  Persona.findAll().then((result) => {
    res.send(result);
  });
});

router.delete('/:id', function(req, res, next) {
  Persona.destroy({
    where: {
      id:req.params.id
    }
  }).then(function(result) {
    res.send('adios' + result);
  });
});

router.post('/', (req, res, next) => {
  Persona.create(req.body).then((result)=>{
      res.send(result);
  });
});


module.exports = router;
