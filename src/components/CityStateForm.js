import React from "react";

const CityStateForm = props => (
    <form className="col s12 m4 l3 info-form" onSubmit={props.getWeather}>
        <div>
            <input className="white-text" type="text" name="city" placeholder="City"></input>
            <input className="white-text" type="text" name="stateCode" placeholder="State"></input>
        </div>
        <div className="center-align white-text">
            <p>- or -</p>
        </div>
        <div>
            <input className="white-text" type="text" name="zipCode" placeholder="Zip Code"></input>
        </div>
        <div className="center-align top-margin">
            <button className="btn-large waves-effect waves-light light-blue darken-3">Get the Weather</button>
        </div>
    </form>
);

export default CityStateForm;