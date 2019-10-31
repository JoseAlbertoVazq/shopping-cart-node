'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            name: 'Pizza Margheritta',
            price: 5
        },
        {
            name: 'Pizza Pepperoni',
            price: 7
        },
        {
            name: 'Pizza Quattro Formaggi',
            price: 8
        },
        {
            name: 'Vegan Pizza',
            price: 6
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
