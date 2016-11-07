var serviceRegistry = require('./service-registry.js');
function ServiceBase(name) {
  var service = this;
  var interestedEvents = [];
  var onFunctions = {};
  var name = name;

  service.getName = function() {
    return name;
  }

  service.register = function() {
    serviceRegistry.register(this, service.getName());
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
