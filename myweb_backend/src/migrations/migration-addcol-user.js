module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "totalOrder", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "totalOrder");
  },
};
