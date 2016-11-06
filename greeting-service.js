var serviceBus = require('./service-bus.js');
var interestedEvents = [
  'person-joined'
];

exports.notify = function(eventName, params) {
  console.info("A person just joined.");
}

exports.getInterestedEvents = function() {
  return interestedEvents;
}
