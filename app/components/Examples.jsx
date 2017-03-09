var React = require("react");
var {Link} = require("react-router");
// var Examples = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<h3>Examples Component</h3>
// 			</div>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Karachi">Karachi, Pakistan</Link>
				</li>
				<li>
					<Link to="/?location=Lahore">Lahore, Pakistan</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;