//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const login = require("../controllers/login.js");

module.exports = function(app){
  app.get('/', index.home);
  app.post('/login',login.authenticate);
}
