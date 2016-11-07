var serviceRegistry = require('./service-registry.js');
var http = require('http');


function ServiceBase(name) {
  var service = this;
  var interestedEvents = [];
  var onFunctions = {};
  var name = name;

  service.getName = function() {
    return name;
  }

  service.register = function() {
    return http.get({
      host: '127.0.0.1',
      port: '8080',
      path: '/register'
    }, function(response) {
      response.on('data', function(data) {
        console.info(data);
      })
    }, function(response) {
      console.info("ERROR");
    });
    // serviceRegistry.register(this, service.getName());
  }

  service.getInterestedEvents = function() {
    return interestedEvents;
  }

  service.on = function(eventName, callback) {
    interestedEvents.push(eventName);
    onFunctions[eventName] = onFunctions[eventName] || [];
    onFunctions[eventName].push(callback);
  }

  return service;
}

module.exports = ServiceBase;
