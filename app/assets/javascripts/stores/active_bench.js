(function(root) {
  'use strict';
  var _activeBench = null;
  var CHANGE_HOVER = "change hover";

  var hoverBench = function(bench) {
    _activeBench = bench;
  };

  root.ActiveBenchStore = $.extend({}, EventEmitter.prototype, {
    activeBench: function() {
      return _activeBench;
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_HOVER, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_HOVER, callback);
    }
  });

  AppDispatcher.register(function(payload){
    if(payload.actionType === BenchConstants.BENCH_HOVERED){
      hoverBench(payload.bench);
      ActiveBenchStore.emit(CHANGE_HOVER);
    }
  });
}(this));
