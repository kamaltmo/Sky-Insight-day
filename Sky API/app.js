var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var jsonfile = require('jsonfile');
var util = require('util');

//Set static file directory
app.use(express.static(__dirname));

var movieObject;
var tvObject;
var sportsObject;

function init() {
  var movieFile = 'movies.json';
  jsonfile.readFile(movieFile, function(err, obj) {
    movieObject = obj.recs;
  });

  var tvFile = 'tv.json';
  jsonfile.readFile(tvFile, function(err, obj) {
    tvObject = obj.recs;
  });

  var sportsFile = 'sports.json';
  jsonfile.readFile(sportsFile, function(err, obj) {
    sportsObject = obj.recs;
  });

  http.listen(8080, function(){
    console.log('listening on *:8080');
  });
}

function getObjectByTitle(list, title) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].title == title) {
      return JSON.stringify(list[i]);
    }
  }
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/movies', function (req, res, next) {
	res.send(movieObject);
});

app.get('/movies/:title', function (req, res, next) {
	res.send(getObjectByTitle(movieObject, req.params.title));
});

app.get('/tv', function (req, res, next) {
  res.send(tvObject);
});

app.get('/tv/:title', function (req, res, next) {
  res.send(getObjectByTitle(movieObject, req.params.title));
});

app.get('/sports', function (req, res, next) {
  res.send(sportsObject);
});

app.get('/sports/:title', function (req, res, next) {
  res.send(getObjectByTitle(sportsObject, req.param.title));
});

init();
