'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert("homepages", [
     {
        title: "Javascript for dummies",
        description: "A place for coders who are staring to learn about Javescript",
        backgroundColor: "#000000",
        color: "#A086F7",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "Cat GIFS",
        description: "Just a place for people who like cats",
        backgroundColor: "#000000",
        color: "#75C31C",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },  
      {
        title: "Command line cheatsheet",
        description: "library of all comandlines in use today",
        backgroundColor: "#000000",
        color: "#C31C93",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
      {
        title: "Sjaaks Recipes",
        description: "A awesome food blog by Sjaak",
        backgroundColor: "#000000",
        color: "#AC6179",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  }
};
