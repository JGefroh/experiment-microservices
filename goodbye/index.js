var service = require('../service-base.js')('goodbye');
service.on('person-work:done', function() {
  console.info("Goodbye");
});
service.register(service);
