var service = require('../service-base.js')('goodbye');
service.register();
service.on('person-work:done', function() {
  console.info("Goodbye");
});
