Search = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return FilterParams.filterParams();
  },

  updateParams: function() {
    this.state = FilterParams.filterParams();
    ApiUtil.fetchBenches(this.state);
  },

  componentDidMount: function () {
    FilterParams.addChangeListener(this.updateParams);
  },

  componentWillUnmount: function () {
    FilterParams.removeChangeListener(this.updateParams);
  },

  handleMapClick: function(coords) {
    var lat = coords.latLng.J;
    var lng = coords.latLng.M;
    this.history.pushState(null, "benches/new", { lat: lat, lng: lng });
  },

  render: function(){
    return(
      <div className="search">
        <SeatFilter />
        <Map handleMapClick={ this.handleMapClick }/>
        <Index />
      </div>
    );
  }
});
