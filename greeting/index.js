var service = require('../service-base.js')('hello');
service.register();
service.on('person-joined', function() {
  console.info("Hello");
});
