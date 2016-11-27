"use strict";
module.exports = (sequelize, DataTypes) => {
    var Persona = sequelize.define("Persona", {
        apellido: {
          type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        cedula: {
          type: DataTypes.INTEGER,
          unique: true
        }
      }, {
        classMethods: {
          associate: (models) => {
            Persona.hasMany(models.Apuesta,  {as: 'objetivo'});
            Persona.hasMany(models.Apuesta,  {as: 'apostador'});
          }
        }
    });
    
    return Persona;
};