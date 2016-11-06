var serviceRegistry = require('./service-registry.js');
var serviceBus = require('./service-bus.js');

registerAppServices();
run();

function run() {
  serviceBus.notify('person-joined');
  serviceBus.notify('person-worked');
}

function registerAppServices() {
  serviceRegistry.register(require('./registry-logging-service.js'), 'logging');
  serviceRegistry.register(require('./work-service.js'), 'work');
  serviceRegistry.register(require('./goodbye-service.js'), 'goodbye');
  serviceRegistry.register(require('./greeting-service.js'), 'greeting');
}
