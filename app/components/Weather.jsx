var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
	getInitialState: function(){	
		return {
			isloading: false
		};
	},

	handleSearch: function(location){
		// alert(location);
		
		// this.setState({
		// 	location: location,
		// 	temp: 23
		// });

		var that = this;

		this.setState({
			isloading: true
		});

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isloading: false
			});
		}, function(errorMessage){
			that.setState({
				isloading: false
			});
			alert(errorMessage);
		});
		
	},

	render: function(){
		
		var {isloading, location, temp} = this.state;
		
		function renderMessage(){
			if (isloading) {
				return <h3>Fetching Weather...</h3>;
			}
			else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch= {this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;