import React from 'react';

import Title from "./components/Title";
import CityStateForm from "./components/CityStateForm";
import Weather from "./components/Weather";
import "./App.css";

const API_KEY = "5883a3505473456387b8c8bb14b99bab";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    stateCode: undefined,
    description: undefined,
    humidity: undefined,
    precipitation: undefined,
    windSpeed: undefined,
    windDirection: undefined,
    dayOneDescription: undefined,
    dayOneMaxTemp: undefined,
    dayOneMinTemp: undefined,
    dayTwoDescription: undefined,
    dayTwoMaxTemp: undefined,
    dayTwoMinTemp: undefined,
    dayThreeDescription: undefined,
    dayThreeMaxTemp: undefined,
    dayThreeMinTemp: undefined,
    dayFourDescription: undefined,
    dayFourMaxTemp: undefined,
    dayFourMinTemp: undefined,
    dayFiveDescription: undefined,
    dayFiveMaxTemp: undefined,
    dayFiveMinTemp: undefined,
    daySixDescription: undefined,
    daySixMaxTemp: undefined,
    daySixMinTemp: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const stateCode = e.target.elements.stateCode.value;
    const zipCode = e.target.elements.zipCode.value;

    if (city && stateCode) {
      const current_api_call = await fetch(`http://api.weatherbit.io/v2.0/current?city=${city},${stateCode}&key=${API_KEY}&units=I`);
      const current_api_resp = await current_api_call.json();
      const forecast_api_call = await fetch(`http://api.weatherbit.io/v2.0/forecast/daily?city=${city},${stateCode}&key=${API_KEY}&days=7&units=I`);
      const forecast_api_resp = await forecast_api_call.json(); 
      console.log(current_api_resp);
      console.log(forecast_api_resp);
      this.setState({
        temperature: current_api_resp.data[0].temp,
        city: current_api_resp.data[0].city_name,
        stateCode: current_api_resp.data[0].state_code,
        description: current_api_resp.data[0].weather.description,
        humidity: current_api_resp.data[0].rh,
        precipitation: current_api_resp.data[0].precip,
        windSpeed: current_api_resp.data[0].wind_spd,
        windDirection: current_api_resp.data[0].wind_cdir,
        dayOneDescription: forecast_api_resp.data[0].weather.description,
        dayOneMaxTemp: forecast_api_resp.data[0].high_temp,
        dayOneMinTemp: forecast_api_resp.data[0].min_temp,
        dayOneDate: forecast_api_resp.data[0].datetime,
        dayTwoDescription: forecast_api_resp.data[1].weather.description,
        dayTwoMaxTemp: forecast_api_resp.data[1].high_temp,
        dayTwoMinTemp: forecast_api_resp.data[1].min_temp,
        dayTwoDate: forecast_api_resp.data[1].datetime,
        dayThreeDescription: forecast_api_resp.data[2].weather.description,
        dayThreeMaxTemp: forecast_api_resp.data[2].high_temp,
        dayThreeMinTemp: forecast_api_resp.data[2].min_temp,
        dayThreeDate: forecast_api_resp.data[2].datetime,
        dayFourDescription: forecast_api_resp.data[3].weather.description,
        dayFourMaxTemp: forecast_api_resp.data[3].high_temp,
        dayFourMinTemp: forecast_api_resp.data[3].min_temp,
        dayFourDate: forecast_api_resp.data[3].datetime,
        dayFiveDescription: forecast_api_resp.data[4].weather.description,
        dayFiveMaxTemp: forecast_api_resp.data[4].high_temp,
        dayFiveMinTemp: forecast_api_resp.data[4].min_temp,
        dayFiveDate: forecast_api_resp.data[4].datetime,
        daySixDescription: forecast_api_resp.data[5].weather.description,
        daySixMaxTemp: forecast_api_resp.data[5].high_temp,
        daySixMinTemp: forecast_api_resp.data[5].min_temp,
        daySixDate: forecast_api_resp.data[5].datetime,
        daySevenDescription: forecast_api_resp.data[6].weather.description,
        daySevenMaxTemp: forecast_api_resp.data[6].high_temp,
        daySevenMinTemp: forecast_api_resp.data[6].min_temp,
        daySevenDate: forecast_api_resp.data[6].datetime,
        error: undefined
      });
    } else if (zipCode) {
      const current_api_call = await fetch(`http://api.weatherbit.io/v2.0/current?postal_code=${zipCode}&key=${API_KEY}&units=I`);
      const current_api_resp = await current_api_call.json();
      const forecast_api_call = await fetch(`http://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zipCode}&key=${API_KEY}&days=7&units=I`);
      const forecast_api_resp = await forecast_api_call.json(); 
      console.log(current_api_resp);
      console.log(forecast_api_resp);
      this.setState({
        temperature: current_api_resp.data[0].temp,
        city: current_api_resp.data[0].city_name,
        stateCode: current_api_resp.data[0].state_code,
        description: current_api_resp.data[0].weather.description,
        humidity: current_api_resp.data[0].rh,
        precipitation: current_api_resp.data[0].precip,
        windSpeed: current_api_resp.data[0].wind_spd,
        windDirection: current_api_resp.data[0].wind_cdir,
        dayOneDescription: forecast_api_resp.data[0].weather.description,
        dayOneMaxTemp: forecast_api_resp.data[0].high_temp,
        dayOneMinTemp: forecast_api_resp.data[0].min_temp,
        dayOneDate: forecast_api_resp.data[0].datetime,
        dayTwoDescription: forecast_api_resp.data[1].weather.description,
        dayTwoMaxTemp: forecast_api_resp.data[1].high_temp,
        dayTwoMinTemp: forecast_api_resp.data[1].min_temp,
        dayTwoDate: forecast_api_resp.data[1].datetime,
        dayThreeDescription: forecast_api_resp.data[2].weather.description,
        dayThreeMaxTemp: forecast_api_resp.data[2].high_temp,
        dayThreeMinTemp: forecast_api_resp.data[2].min_temp,
        dayThreeDate: forecast_api_resp.data[2].datetime,
        dayFourDescription: forecast_api_resp.data[3].weather.description,
        dayFourMaxTemp: forecast_api_resp.data[3].high_temp,
        dayFourMinTemp: forecast_api_resp.data[3].min_temp,
        dayFourDate: forecast_api_resp.data[3].datetime,
        dayFiveDescription: forecast_api_resp.data[4].weather.description,
        dayFiveMaxTemp: forecast_api_resp.data[4].high_temp,
        dayFiveMinTemp: forecast_api_resp.data[4].min_temp,
        dayFiveDate: forecast_api_resp.data[4].datetime,
        daySixDescription: forecast_api_resp.data[5].weather.description,
        daySixMaxTemp: forecast_api_resp.data[5].high_temp,
        daySixMinTemp: forecast_api_resp.data[5].min_temp,
        daySixDate: forecast_api_resp.data[5].datetime,
        daySevenDescription: forecast_api_resp.data[6].weather.description,
        daySevenMaxTemp: forecast_api_resp.data[6].high_temp,
        daySevenMinTemp: forecast_api_resp.data[6].min_temp,
        daySevenDate: forecast_api_resp.data[6].datetime,
        error: undefined
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        stateCode: undefined,
        description: undefined,
        humidity: undefined,
        precipitation: undefined,
        windSpeed: undefined,
        windDirection: undefined,
        dayOneDescription: undefined,
        dayOneMaxTemp: undefined,
        dayOneMinTemp: undefined,
        dayOneDate: undefined,
        dayTwoDescription: undefined,
        dayTwoMaxTemp: undefined,
        dayTwoMinTemp: undefined,
        dayTwoDate: undefined,
        dayThreeDescription: undefined,
        dayThreeMaxTemp: undefined,
        dayThreeMinTemp: undefined,
        dayThreeDate: undefined,
        dayFourDescription: undefined,
        dayFourMaxTemp: undefined,
        dayFourMinTemp: undefined,
        dayFourDate: undefined,
        dayFiveDescription: undefined,
        dayFiveMaxTemp: undefined,
        dayFiveMinTemp: undefined,
        dayFiveDate: undefined,
        daySixDescription: undefined,
        daySixMaxTemp: undefined,
        daySixMinTemp: undefined,
        daySixDate: undefined,
        daySevenDescription: undefined,
        daySevenMaxTemp: undefined,
        daySevenMinTemp: undefined,
        daySevenDate: undefined,
        error: "Please Try Again"
      });
    }
  }
  render() {
    return (
      <div>
        <Title />
        <div className="row">
          <CityStateForm getWeather={this.getWeather} />
          <Weather temperature={this.state.temperature} city={this.state.city} stateCode={this.state.stateCode} description={this.state.description} humidity={this.state.humidity} precipitation={this.state.precipitation} windSpeed={this.state.windSpeed} windDirection={this.state.windDirection} dayOneDescription={this.state.dayOneDescription} dayOneMaxTemp={this.state.dayOneMaxTemp} dayOneMinTemp={this.state.dayOneMinTemp} dayTwoDescription={this.state.dayTwoDescription} dayOneDate={this.state.dayOneDate} dayTwoMaxTemp={this.state.dayTwoMaxTemp} dayTwoMinTemp={this.state.dayTwoMinTemp} dayTwoDate={this.state.dayTwoDate} dayThreeDescription={this.state.dayThreeDescription} dayThreeMaxTemp={this.state.dayThreeMaxTemp} dayThreeMinTemp={this.state.dayThreeMinTemp} dayThreeDate={this.state.dayThreeDate} dayFourDescription={this.state.dayFourDescription} dayFourMaxTemp={this.state.dayFourMaxTemp} dayFourMinTemp={this.state.dayFourMinTemp} dayFourDate={this.state.dayFourDate} dayFiveDescription={this.state.dayFiveDescription} dayFiveMaxTemp={this.state.dayFiveMaxTemp} dayFiveMinTemp={this.state.dayFiveMinTemp} dayFiveDate={this.state.dayFiveDate} daySixDescription={this.state.daySixDescription} daySixMaxTemp={this.state.daySixMaxTemp} daySixMinTemp={this.state.daySixMinTemp} daySixDate={this.state.daySixDate} daySevenDescription={this.state.daySevenDescription} daySevenMaxTemp={this.state.daySevenMaxTemp} daySevenMinTemp={this.state.daySevenMinTemp} daySevenDate={this.state.daySevenDate} error={this.state.error} />
        </div>
      </div>
    );
  }
}

export default App;