SeatFilter = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return { min: 1, max: 10 };
  },

  setMin: function(event) {
    this.setState({min: event.target.value});
    this.delaySearch();
  },

  setMax: function(event) {
    this.setState({max: event.target.value});
    this.delaySearch();
  },

  delaySearch: function() {
    window.clearTimeout(this.searchTimeout);
    this.searchTimeout = window.setTimeout(this.filterBenches, 500);
  },

  filterBenches: function() {
    ApiActions.changeSeats(this.state);
  },

  render: function() {
    return(
      <div className="seat-filter">
        <label>Minimum seats: {this.state.min}
          <input type="range" min="1" max="10" defaultValue="1" onChange={this.setMin} />
        </label>
        <label>Maximum seats: {this.state.max}
          <input type="range" min="1" max="10" defaultValue="10" onChange={this.setMax} />
        </label>
      </div>
    );
  }
});
