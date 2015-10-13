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
    return (
      <div className="index">{
        this.state.benches.map(function(bench){
          return <IndexListItem key={bench.id} bench={bench} />;
        })
      }</div>
    );
  }
});
