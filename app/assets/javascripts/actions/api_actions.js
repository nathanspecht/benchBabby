ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  addBench: function(bench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  },

  benchHover: function(bench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_HOVERED,
      bench: bench
    });
  },

  changeBounds: function(bounds){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BOUNDS_CHANGED,
      bounds: bounds
    });
  },

  changeSeats: function(seats){
    AppDispatcher.dispatch({
      actionType: BenchConstants.SEATS_CHANGED,
      seats: seats
    });
  }
};
