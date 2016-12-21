var MongoClient = require('mongodb').MongoClient;
var config = require('../config/config');
var helper = require('../seed/seed');
var ShelterProvider = require('./shelterProvider').shelterProvider;

var shelter = new ShelterProvider(config);


exports.getDogs = function (req, res) {
    
    shelter.findAll(function (error, dogs) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(dogs);
        }
    });
};

exports.getDog = function(req, res) {
    shelter.findById(req, function (error, dogs) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(dogs);
        }
    });
};

exports.addDog = function(req, res) {
    shelter.add(req, function (error, dogs) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(dogs);
        }
    });
};

exports.updateDog = function(req, res) {
    var id = req.params.id;
    var dogs = req.params.dogs;
    
    shelter.add(id, dogs, function (error, dogs) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(dogs);
        }
    });
};


