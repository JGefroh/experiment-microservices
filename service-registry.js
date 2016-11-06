var services = {};

exports.register = function(service, alias) {
  services[alias] = service;
  exports.notify('service-registered', {name: alias});
}

exports.unregister = function(alias) {
  delete services[alias];
}

exports.notify = function(eventName, params) {
  for (var service in services) {
    if (services[service].getInterestedEvents().indexOf(eventName) !== -1) {
      services[service].notify(eventName, params);
    }
  }
}
