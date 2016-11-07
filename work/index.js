var service = require('../service-base.js')('work');
service.register(service);
service.on('person-joined', function() {
  service.notify('person-work:done');
});
