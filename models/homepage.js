'use strict';
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define('homepage', {
    title: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: DataTypes.TEXT,
    backgroundColor: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  homepage.associate = function(models) {
    homepage.belongsTo(models.user, {
      foreignKey: "userId"
    })
    homepage.hasMany(models.story)
  };
  return homepage;
};