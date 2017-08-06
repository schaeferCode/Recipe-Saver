var Sequelize = require('sequelize');
var db = new Sequelize('recipes', 'root', '', {
  dialect: 'mysql'
});

var User = db.define('User', {
  username: Sequelize.STRING
});

var Recipe = db.define('Recipe', {
  recipe: Sequelize.STRING
});

Recipe.belongsTo(User);
User.hasMany(Recipe);

// force: true will drop the table if it already exists
User.sync();
Recipe.sync();

exports.User = User;
exports.Recipe = Recipe;