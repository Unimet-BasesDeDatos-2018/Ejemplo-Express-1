"use strict";
module.exports = (sequelize, DataTypes) => {
    var Apuesta = sequelize.define("Apuesta", {
        resultado: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 10,
          validate: { min: 0, max: 20 }
        },
        monto: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 100,
          validate: { min: 0 }
        }
      }, {
      classMethods: {
        associate: (models) => {
          Apuesta.belongsTo(models.Persona, {
              onDelete: "CASCADE",
              as: 'apostador'
          });
          Apuesta.belongsTo(models.Persona, {
              onDelete: "CASCADE",
              as: 'objetivo'
          });
        }
      }
    });
    return Apuesta;
};
