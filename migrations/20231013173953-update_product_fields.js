"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // return Promise.all([
    //   queryInterface.addColumn("products", "productLink", {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   }),
    // ])
  },

  async down(queryInterface, DataTypes) {
    return Promise.all([
      queryInterface.removeColumn('products', 'productDesc')
    ])
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
