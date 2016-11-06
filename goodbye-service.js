var interestedEvents = [
  'person-left'
];

exports.notify = function(eventName, params) {
  console.info("Goodbye");
}

exports.getInterestedEvents = function() {
  return interestedEvents;
}
