Map = React.createClass({
  getInitialState: function() {
    return { markers: [], activeBench: null };
  },

  _addBenches: function() {
    var image = {
      url: 'bench-512.png',
    };
    BenchStore.all().forEach(function(bench){
      var marker = new google.maps.Marker({
        position: { lat: bench.lat, lng: bench.lng },
        map: this.map,
        title: bench.description,
        icon: image
      });

      if (bench === this.state.activeBench){
        marker.setIcon('yoga.png');
      }

      marker.setMap(this.map);
      this.state.markers.push(marker);
    }.bind(this));
  },

  _removeBenches: function() {
    this.state.markers.forEach(function(marker){
      marker.setMap(null);
    });
  },

  _mapChange: function(){
    this._removeBenches();
    this._addBenches();
  },

  _getBenches: function(){
    var northEast = this.map.getBounds().getNorthEast();
    var nELat = northEast.lat();
    var nELng = northEast.lng();

    var southWest = this.map.getBounds().getSouthWest();
    var sWLat = southWest.lat();
    var sWLng = southWest.lng();

    bounds = { northEast: { lat: nELat, lng: nELng },
               southWest: { lat: sWLat, lng: sWLng } };
    ApiActions.changeBounds(bounds);
  },

  _activateBench: function() {
    var activeBench = ActiveBenchStore.activeBench();
    this.state.activeBench = activeBench;
    this._mapChange();
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener("idle", this._getBenches);
    this.map.addListener("click", this.props.handleMapClick);
    BenchStore.addChangeListener(this._mapChange);
    ActiveBenchStore.addChangeListener(this._activateBench);
  },

  componentWillUnmount: function () {
    BenchStore.removeChangeListener(this._mapChange);
    ActiveBenchStore.removeChangeListener(this._activateBench);
  },

  render: function(){
    return (
      <div className="map" ref="map"></div>
    );
  }
});
