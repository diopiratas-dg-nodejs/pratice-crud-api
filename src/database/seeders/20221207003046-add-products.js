'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produto', [{
        image: '6781265712y7812.jpg',
        name: 'Batedeira Mondial',
        price: 16999,
        discount: 5,
        category: 'in-sale',
        description: 'Super Batedeira muito boa'
     },
     {
      image: '12311212.jpg',
      name: 'Liquidificador Mondial',
      price: 1000,
      discount: 2,
      category: 'in-sale',
      description: 'Liquidifica'
   }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produto',{[Op.or]: [{name: 'Batedeira Mondial'}, {name: 'Liquidificador Mondial'}]});
  }
};
