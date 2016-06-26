ApiUtil = {
  fetchBenches: function(params) {
    $.ajax({
      url: 'api/benches/index',
      type: 'get',
      dataType: 'json',
      data: { params: params },
      success: function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  },

  createBench: function(bench){
    $.ajax({
      url: 'api/benches/create',
      type: 'post',
      dataType: 'json',
      data: { bench: bench },
      success: function(bench) {
        ApiActions.addBench(bench);
      }
    });
  }
};
