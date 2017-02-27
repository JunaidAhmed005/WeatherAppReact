var axios = require("axios");

//ab256ba7c986d7fdc56c37eabe3a7ae3

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=ab256ba7c986d7fdc56c37eabe3a7ae3&units=metric";

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(function(res){
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			}
			else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		});
	}
} 