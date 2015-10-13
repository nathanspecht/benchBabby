LinkedStateMixin = React.addons.LinkedStateMixin;

SeatFilter = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return { min: null, max: null };
  },

  filterBenches: function() {
    ApiActions.changeSeats(this.state);
  },

  render: function() {
    return(
      <div className="seat-filter">
        <label>Minimum seats:
          <input type="text" valueLink={ this.linkState('min') } />
        </label>
        <label>Maximum seats:
          <input type="text" valueLink={ this.linkState('max') } />
        </label>
        <button onClick={this.filterBenches}>Filter Benches</button>
      </div>
    );
  }
});
