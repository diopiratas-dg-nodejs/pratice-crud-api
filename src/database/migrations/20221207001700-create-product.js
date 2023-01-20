'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Produto', 
    {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
       },
       image: {
           type: Sequelize.STRING(255),
           allowNull: false,
       },
       name: {
           type: Sequelize.INTEGER,
           allowNull: false,
       },
       price: {
           type: Sequelize.INTEGER,
           allowNull: false,
       },
       discount: {
           type: Sequelize.INTEGER,
           allowNull: false,
       },
       category: {
           type: Sequelize.STRING(50),
           allowNull: false
       },
       description: {
           type: Sequelize.TEXT,
           length: 'long'
       }     
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Produto');
  }
};
