var interestedEvents = [
  'person-worked'
];


exports.notify = function(eventName, params) {
  console.info("Work");
}


exports.getInterestedEvents = function() {
  return interestedEvents;
}
