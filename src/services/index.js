const application = require('./application/application.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(application);
};