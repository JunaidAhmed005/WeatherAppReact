var React = require("react");
var ReactDOM = require("react-dom");
// Object Destructuring Syntax ES6 Feature
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

//Same as this
//******************************************
/*
 var Route = require("react-router").Route;

var obj = {
	name: "Junaid"
};

var {name} = obj;
var name = obj.name;
*/
//******************************************
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather} />
		</Route>
	</Router>,
	document.getElementById("app")
);