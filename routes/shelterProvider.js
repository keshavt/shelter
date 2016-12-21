
const config = require('../config/config');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSONPure;

var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//ctor that connects and provides access to our db
shelterProvider = function (config) {
    this.db = new Db(config.collectionname, new Server(config.hostname, 27017));
    this.db.open(function (error, db) {
        assert.equal(null, error);
    });
};

// get collection, so it's easier for CRUD with this
shelterProvider.prototype.getCollection = function (callback) {
    this.db.collection('dogs', function (error, dog_collection) {
        if (error) {
            console.log(error);
            callback(error);
        }
        else {
            callback(null, dog_collection);
        }
    });
};

// get all
shelterProvider.prototype.findAll = function (callback) {
    this.getCollection(function (error, dog_collection) {
        if (error) {
            console.log(error);
            callback(error);
        }
        else {
            dog_collection.find().toArray(function (error, results) {
                if (error) {
                    console.log(error);
                    callback(error);
                }
                else {
                    callback(null, results);
                }
            });
        }
    });
};

// get by id
shelterProvider.prototype.findById = function (id, callback) {
    this.getCollection(function (error, dog_collection) {
        if (error) {
            console.log(error);
            callback(error);
        }
        else {

            dog_collection.findOne({ _id: dog_collection.db.bson_serializer.ObjectID.createFromHexString(id) }, function (error, result) {
                if (error) {
                    console.log(error);
                    callback(error);
                }
                else {
                    callback(null, result);
                }
            });
        }
    });
};

//add new
shelterProvider.prototype.add = function (dogs, callback) {
    this.getCollection(function (error, dog_collection) {
        if (error) {
            console.log(error);
            callback(error);
        }
        else {
            if (typeof (dogs.length) == "undefined")
                dogs = [dogs];

            for (var i = 0; i < dogs.length; i++) {
                dog = dogs[i];
                dog.created_at = new Date();
            }

            dog_collection.insert(dogs, function () {
                callback(null, dogs);
            });
        }
    });
};

// update
shelterProvider.prototype.update = function (id, dogs, callback) {
    this.getCollection(function (error, dog_collection) {
        if (error) {
            callback(error);
        }
        else {
            dog_collection.update(
                { _id: dog_collection.db.bson_serializer.ObjectID.createFromHexString(id) },
                dogs,
                function (error, dogs) {
                    if (error) callback(error);
                    else callback(null, dogs)
                });
        }
    });
};

//delete
shelterProvider.prototype.delete = function (id, callback) {
    this.getCollection(function (error, dog_collection) {
        if (error) callback(error);
        else {
            dog_collection.remove(
                { _id: dog_collection.db.bson_serializer.ObjectID.createFromHexString(id) },
                function (error, dog) {
                    if (error) callback(error);
                    else callback(null, dog)
                });
        }
    });
};

exports.shelterProvider = shelterProvider;