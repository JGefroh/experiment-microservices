var services = {};

exports.register = function(service, alias) {
  services[alias] = service;
  exports.notify('service-registered', {name: alias});
}

exports.unregister = function(alias) {
  delete services[alias];
}

exports.notify = function(eventName, params) {
  for (var serviceName in services) {
    if (services[serviceName].getInterestedEvents().indexOf(eventName) !== -1) {
      services[serviceName].notify(eventName, params);
    }
  }
}
