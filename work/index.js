var service = require('../service-base.js')('work');
service.register();
service.on('person-joined', function() {
  console.info("Working!")
  service.notify('person-work:done');
});
