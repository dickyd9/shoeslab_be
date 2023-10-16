"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: DataTypes.INTEGER });
     */
    queryInterface.addColumn(
      "users", // table name
      "fullname", // new field name
      {
        type: DataTypes.STRING,
        allowNull: true,
      }
    ),
      queryInterface.addColumn(
        "users", // table name
        "address", // new field name
        {
          type: DataTypes.STRING,
          allowNull: true,
        }
      )
      queryInterface.addColumn(
        "users", // table name
        "role", // new field name
        {
          type: DataTypes.STRING,
          allowNull: true,
        }
      )
  },

  async down(queryInterface, DataTypes) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
