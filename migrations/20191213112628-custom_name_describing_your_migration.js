"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "email", {
      type: String
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "email");
  }
};
