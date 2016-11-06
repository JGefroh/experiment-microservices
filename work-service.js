var serviceBus = require('./service-bus.js');
var interestedEvents = [
  'person-worked'
];


exports.notify = function(eventName, params) {
  console.info("Work");
  serviceBus.notify('person-work:done');
}


exports.getInterestedEvents = function() {
  return interestedEvents;
}
