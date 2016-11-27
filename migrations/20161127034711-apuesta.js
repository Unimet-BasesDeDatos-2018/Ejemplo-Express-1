'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable("Apuestas", {
      resultado: {
        type: Sequelize.INTEGER,
        defaultValue: 10,
        validate: { min: 0, max: 20 }
      },
      monto: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        validate: { min: 0 }
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.dropTable('Apuestas');
    
  }
};
