
BenchForm = React.createClass({

  getInitialState: function() {
    return { lat: this.props.location.query.lat,
             lng: this.props.location.query.lng,
             seats: null,
             description: null,
             };
  },
  componentDidMount: function(){
    BenchStore.addChangeListener(this.rootDirect);
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this.rootDirect);
  },

  addBench: function(event) {
    ApiUtil.createBench(this.state);
  },

  rootDirect: function() {
    this.history.pushState(null, '/');
  },

  render: function(){
    return (
        <form>
          <label>Latitude:
          <input type="text"/>
          </label>
          <label>Longitude:
          <input type="text"/>
          </label>
          <label>Description:
          <input type="textarea"
                 valueLink={this.linkState('description')} />
          </label>
          <label>Number of Seats:
          <input type="text"/>
          </label>
          <button onClick={this.addBench}>Add Bench</button>
        </form>
    );
  }
});
