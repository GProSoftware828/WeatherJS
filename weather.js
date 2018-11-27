class Weather {
	constructor() {
		this.apiKey = '[they shut down the free service]';
		this.city = city;
		this.state = state;
	}

	async getWeather() {
		const response = await fetch(`[url copied from api website]`);
		const responseData = await response.json();

		return responseData.current_observation;
	}

	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}

}

