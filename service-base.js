var serviceRegistry = require('./service-registry.js');
var http = require('http');


function ServiceBase(name) {
  var service = this;
  var interestedEvents = [];
  var onFunctions = {};
  var name = name;
  var host = '127.0.0.1';
  var port = (Math.floor((Math.random() * 60000)) + 500);

  service.getName = function() {
    return name;
  }

  service.getHost = function() {
    return host;
  }

  service.register = function() {
    var request = http.request({
      host: '127.0.0.1',
      port: '8080',
      path: '/register',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    request.write(JSON.stringify({name: service.getName(), host: service.getHost(), port: port}));
    request.end();
  }

  service.getInterestedEvents = function() {
    return interestedEvents;
  }

  service.on = function(eventName, callback) {
    interestedEvents.push(eventName);
    onFunctions[eventName] = onFunctions[eventName] || [];
    onFunctions[eventName].push(callback);
  }

  service.notify = function(eventName, payload) {
    var request = http.request({
      host: '127.0.0.1',
      port: '8080',
      path: '/notify',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    request.write(JSON.stringify({name: eventName, payload: payload}));
    request.end();
  }


  function listen(port) {
    var server = http.createServer(handleRequest);
    function handleRequest(request, response) {
      if (request.url.indexOf('notify') !== -1) {
        var finalData = '';
        request.on('data', function(data) {
          finalData += data;
        })
        request.on('end', function(data) {
          event = JSON.parse(finalData);
          response.end();
          if (onFunctions[event.name]) {
            for (var i = 0; i < onFunctions[event.name].length; i++) {
              onFunctions[event.name][i](event.name, event.payload);
            }
          }
        });
      }
    }
    server.listen(port, function() {
      console.info("Listening on " + port);
    });
  }

  listen(port);
  return service;
}

module.exports = ServiceBase;
