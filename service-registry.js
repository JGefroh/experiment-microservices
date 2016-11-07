var http = require('http');

exports.listen = function(port) {
  var server = http.createServer(handleRequest);
  function handleRequest(request, response) {
    if (request.url.indexOf('register') !== -1) {
      console.info("registering ");
      console.info(request);
    }
    else if (request.url.indexOf('notify') !== -1) {
      console.info("notifying " + request.body);
    }
  }
  server.listen(port, function() {
    console.info("Listening on " + port);
  });
}

var services = {};

function register(service, alias) {
  services[alias] = service;
  notify('service-registered', {name: alias});
}

function unregister(alias) {
  delete services[alias];
}

function notify(eventName, params) {
  for (var serviceName in services) {
    if (services[serviceName].getInterestedEvents().indexOf(eventName) !== -1) {
      services[serviceName].notify(eventName, params);
    }
  }
}
