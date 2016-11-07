var http = require('http');
var services = {};

exports.listen = function(port) {
  var server = http.createServer(handleRequest);
  function handleRequest(request, response) {
    if (request.url.indexOf('register') !== -1) {
      var finalData = '';
      request.on('data', function(data) {
        finalData += data;
      })
      request.on('end', function(data) {
        service = JSON.parse(finalData);
        register(service, service.name);
        response.end();
      });
    }
    else if (request.url.indexOf('notify') !== -1) {
      var finalData = '';
      request.on('data', function(data) {
        finalData += data;
      })
      request.on('end', function(data) {
        event = JSON.parse(finalData);
        exports.notify(event.name, event.payload);
        response.end();
      });
    }
  }
  server.listen(port, function() {
    console.info("Listening on " + port);
  });
}

exports.notify = function(eventName, params) {
  for (var serviceName in services) {
    var request = http.request({
      host: services[serviceName].host,
      port: services[serviceName].port,
      path: '/notify',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    request.write(JSON.stringify({name: eventName, payload: params}));
    request.end();
  }
}

function register(service, alias) {
  services[alias] = service;
}

function unregister(alias) {
  delete services[alias];
}
