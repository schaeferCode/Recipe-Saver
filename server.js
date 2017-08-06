var express = require('express');
var path = require('path');
var db = require('./db/dbconfig');
var app = express();

app.use(express.static(path.join(__dirname, '/compiled')));

app.get('/recipes', function (req, res) {

  db.User.findAll({
    include: [db.Recipe]
  })
  .then(function (username) {
    res.status(201).json(username)
  });
});

// add get /users

app.listen(3000, function () {
  console.log('Server listening on port 3000');
})

exports = app;