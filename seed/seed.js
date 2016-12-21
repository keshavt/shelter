'use strict';

const config = require('../config/config');
const data = require('./data');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let url = config.db.uri;




var insertDocuments = function(db, callback) {
  // Get the dogs collection 
  let collection = db.collection('dogs');
  // Insert some documents 
  collection.insertMany(data, function(err, result) {
    assert.equal(err, null);
    assert.equal(200, result.result.n);
    assert.equal(200, result.ops.length);
    console.log("Inserted 200 documents into the dogs collection");
    callback(result);
  });
}

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
    
  insertDocuments(db, function() {
    db.close();
  });

});

