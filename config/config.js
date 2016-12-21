'use strict';

module.exports = {
  port: process.env.PORT || 27017,
  hostname: process.env.HOST || '127.0.0.1',
  auto_reconnect: true,
  collectionname: 'dog-shelter',
  db: {
      name:'dogs',
    uri: 'mongodb://localhost:27017/dog-shelter',
    options: {
      user: '',
      pass: '',
      safe:true
      
    }
  }
};

