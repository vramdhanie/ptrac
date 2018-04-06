// application-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const application = new Schema({
    name: {type: String, required: true},
    username: {type: String},
    url: {type: String},
    hint: {type: String},
    pin: {type: String},
    note: { type: String, required: true },
    password: {type: String},
    archive: {type: Boolean, default: false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('application', application);
};
