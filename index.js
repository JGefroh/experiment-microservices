var serviceRegistry = require('./service-registry.js');

run();

function run() {
  simulateRequests();
}

function simulateRequests() {
  var randomWaitTime = Math.random() * 1000;
  setTimeout(function() {
    serviceRegistry.notify('person-joined');
    simulateRequests();
  }, randomWaitTime);
}
