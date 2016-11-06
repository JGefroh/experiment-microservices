var serviceRegistry = require('./service-registry.js');
var serviceBus = require('./service-bus.js');

registerAppServices();
run();

function run() {
  simulateRequests();
}

function simulateRequests() {
  var randomWaitTime = Math.random() * 1000;
  setTimeout(function() {
    setTimeout(function() {
      serviceBus.notify('person-joined');
    }, Math.random() * 400);
    simulateRequests();
  }, randomWaitTime);
}

function registerAppServices() {
  serviceRegistry.register(require('./registry-logging-service.js'), 'logging');
  serviceRegistry.register(require('./greeting-service.js'), 'greeting');
  serviceRegistry.register(require('./work-service.js'), 'work');
  serviceRegistry.register(require('./goodbye-service.js'), 'goodbye');
}
