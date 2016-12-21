'use strict';

//if (process.env.MONGO_SEED) {
//    require('./seed/seed');
//}

const express = require('express');
const http = require('http');
const config = require('./config/config');

const hostname = config.hostname;
const port = config.port;

var routes = require('./routes');
var api = require('./routes/api');


var app = module.exports = express();
app.set('port', port);
app.set('view engine', 'jade');

app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());

app.get('/', routes.index);

app.get('/api/dogs', api.getDogs);
app.get('/api/dogs/:id', api.getDog);
app.post('/api/dogs', api.addDog);
app.put('/api/dogs/:id', api.updateDog);

var server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});



