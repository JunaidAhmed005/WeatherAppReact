var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

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
			isloading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isloading: false
			});
		}, function(e){
			that.setState({
				isloading: false,
				errorMessage: e.message
			});
		});
		
	},

	render: function(){
		
		var {isloading, location, temp, errorMessage} = this.state;
		
		function renderMessage(){
			if (isloading) {
				return <h3 className="text-center">Fetching Weather...</h3>;
			}
			else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		function renderError(){
			if (typeof errorMessage === "string") {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch= {this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;