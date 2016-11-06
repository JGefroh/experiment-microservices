var serviceBus = require('./service-bus.js');
var interestedEvents = [
  'person-joined'
];


exports.notify = function(eventName, params) {
  console.info("Doing work for person...");
  serviceBus.notify('person-work:done');
}


exports.getInterestedEvents = function() {
  return interestedEvents;
}
