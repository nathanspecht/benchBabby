Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() };
  },

  _benchChange: function(){
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function(){
    BenchStore.addChangeListener(this._benchChange);
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener(this._benchChange);
  },

  render: function(){
    var benches = this.state.benches.map(function(bench){
      return <IndexListItem key={bench.id} bench={bench} />;
    });
    var count = benches.length;
    return (
      <div className="results">
        <h2>{count} benches found</h2>
        <div className="index">
          {benches}
        </div>
      </div>
    );
  }
});
