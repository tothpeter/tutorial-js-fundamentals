+function(){
  'use strict';

  // Publisher / Subscriber

  var pubsub = (function(){
    var subscribers = {};

    function EventObject() {}
    EventObject.prototype = {};
    EventObject.prototype.constructor = EventObject;

    function subscribe(event, callback) {
      if (!subscribers[event]) {
        // var subscriberArray = [callback];
        subscribers[event] = [ callback ];
      } else {
        subscribers[event].push(callback);
      }      
    }

    function publish(event, data) {
      var eventObject = new EventObject();
      eventObject.type = event;
      if (data) {
        eventObject.data = data;
      }

      if (subscribers[event]) {
        subscribers[event].forEach(function(callback) {
          callback(eventObject);
        });
      }
    }

    return {
      pub: publish,
      sub: subscribe
    }
  }());

  pubsub.sub('custevent', function(e) {
    console.log('Cust was triggered!', e);
  });

  pubsub.pub('custevent', {
    customData: 'customData!'
  });
}();