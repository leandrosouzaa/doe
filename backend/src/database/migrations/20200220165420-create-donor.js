'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('donors', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      blood: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('donors');
  }
};
