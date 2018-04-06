'use strict'

const crypto = require('crypto');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {password, hint, pin, username} = context.data;
    context.data.password = crypto.createHash('md5').update(password).digest('hex');
    return context;
  };
};
