var interestedEvents = [
  'service-registered'
];

exports.notify = function(eventName, params) {
  console.info("Service registered: " + params.name);
}

exports.getInterestedEvents = function() {
  return interestedEvents;
}
