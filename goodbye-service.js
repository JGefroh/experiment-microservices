var interestedEvents = [
  'person-work:done'
];

exports.notify = function(eventName, params) {
  console.info("Goodbye");
}

exports.getInterestedEvents = function() {
  return interestedEvents;
}
