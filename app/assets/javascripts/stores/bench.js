(function(root) {
  'use strict';
  var _benches = [];
  var CHANGE_EVENT = "change";

  var resetBenches = function(benches){
    _benches = benches;
  };

  var addBench = function(bench){
    _benches.push(bench);
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _benches.slice();
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }

  });

  AppDispatcher.register(function(payload){
    switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.emit(CHANGE_EVENT);
      break;
    case BenchConstants.BENCH_RECEIVED:
      addBench(payload.bench);
      BenchStore.emit(CHANGE_EVENT);
      break;
    }
  });

}(this));
