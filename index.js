var serviceRegistry = require('./service-registry.js');
registerAppServices();
run();

function run() {
  serviceRegistry.notify('person-joined');
  serviceRegistry.notify('person-worked');
  serviceRegistry.notify('person-left');
}

function registerAppServices() {
  serviceRegistry.register(require('./registry-logging-service.js'), 'logging');
  serviceRegistry.register(require('./work-service.js'), 'work');
  serviceRegistry.register(require('./goodbye-service.js'), 'goodbye');
  serviceRegistry.register(require('./greeting-service.js'), 'greeting');
}
