'use strict';
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define('story', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING
  }, {});
  story.associate = function(models) {
    story.belongsTo(models.homepage, {
      foreignKey: "homepageId"
    })
  };
  return story;
};