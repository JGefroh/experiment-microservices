var serviceRegistry = require('./service-registry.js');
serviceRegistry.listen(8080);

run();

function run() {
  simulateRequests();
}

function simulateRequests() {
  var randomWaitTime = Math.random() * 1000;
  setTimeout(function() {
    serviceRegistry.notify('person-joined');
    console.info("Done notifying");
    simulateRequests();
  }, randomWaitTime);
}
