var serviceRegistry = require('./service-registry.js');

exports.notify = function(eventName, params) {
  serviceRegistry.notify(eventName, params)
;}
