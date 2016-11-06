var interestedEvents = [
  'person-joined'
];

exports.notify = function(eventName, params) {
  console.info("Hello!");
}

exports.getInterestedEvents = function() {
  return interestedEvents;
}
