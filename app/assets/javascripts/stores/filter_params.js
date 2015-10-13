(function(root) {
  'use strict';
  var _filterParams = { bounds: {}, minSeats: 0, maxSeats: 100 };
  var CHANGE_PARAMS = "change params";

  var changeBounds = function(bounds) {
    _filterParams.bounds = bounds;
  };

  var changeSeats = function(seats) {
    _filterParams.minSeats = seats.min || 0;
    _filterParams.maxSeats = seats.max || 100;
  };

  root.FilterParams = $.extend({}, EventEmitter.prototype, {
    filterParams: function() {
      return _filterParams;
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_PARAMS, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_PARAMS, callback);
    }
  });

  AppDispatcher.register(function(payload){
    if(payload.actionType === BenchConstants.BOUNDS_CHANGED){
      changeBounds(payload.bounds);
      FilterParams.emit(CHANGE_PARAMS);
    } else if (payload.actionType === BenchConstants.SEATS_CHANGED){
      changeSeats(payload.seats);
      FilterParams.emit(CHANGE_PARAMS);
    }
  });
}(this));
