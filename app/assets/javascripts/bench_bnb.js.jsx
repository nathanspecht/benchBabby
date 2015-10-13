var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
        <h1>
          BENCH BABBY
          <img src="pixlbabby.png" width="100px" height="100px"/>
        </h1>
        </header>
        { this.props.children }
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Search }/>
    <Route path="benches/new" component={ BenchForm }/>
  </Route>
);



$(document).ready(function(){
  React.render(<Router>{routes}</Router>, document.getElementById('content'));
});
