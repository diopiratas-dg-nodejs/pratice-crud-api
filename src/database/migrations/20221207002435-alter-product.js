'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.alterTable('produtos', 
    {
      category: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.alterTable('produtos', 
    {
      category: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    })
  }
};
