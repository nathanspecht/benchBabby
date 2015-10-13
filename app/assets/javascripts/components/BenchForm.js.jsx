LinkedStateMixin = React.addons.LinkedStateMixin;
Modal = React.addons.Modal;

BenchForm = React.createClass({
  mixins: [LinkedStateMixin, ReactRouter.History, Modal],

  getInitialState: function() {
    return { lat: this.props.location.query.lat,
             lng: this.props.location.query.lng,
             seats: null,
             description: null };
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
          <input type="text" valueLink={this.linkState('lat')} />
          </label>
          <label>Longitude:
          <input type="text" valueLink={this.linkState('lng')} />
          </label>
          <label>Description:
          <input type="textarea"
                 valueLink={this.linkState('description')} />
          </label>
          <label>Number of Seats:
          <input type="text" valueLink={this.linkState('seats')} />
          </label>
          <button onClick={this.addBench}>Add Bench</button>
        </form>
    );
  }
});
