IndexListItem = React.createClass({
  benchHover: function() {
    ApiActions.benchHover(this.props.bench);
  },

  benchUnhover: function() {
    ApiActions.benchHover(null);
  },

  render: function() {
    return(
      <div onMouseOver={ this.benchHover }
           onMouseLeave={ this.benchUnhover }
           key={ this.props.bench.id }
           className="listing">
           <img src={this.props.bench.img_url} height="150" width="200"/>
           { this.props.bench.description }
      </div>
    );
  }
});
