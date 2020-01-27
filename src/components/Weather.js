import React from "react";

const Weather = props => (
    <div className="col s12 m8 l9 weather-output center-wrapper white-text">
        { props.city && props.stateCode && <div className="location center-align">{ props.city }, { props.stateCode }</div> }
        { props.temperature && <p className="center-align"><label>Current Temp:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.temperature }°</span></p> }
        { props.description && <p className="center-align"><label>Current Condition:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.description }</span></p> }
        { props.humidity && <p className="center-align"><label>Relative Humidity:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.humidity }%</span></p> }
        { props.windSpeed && props.windDirection && <p className="center-align"><label>Wind:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.windSpeed }mph, { props.windDirection }</span></p> }
        { props.dayOneDate && <p className="center-align"><label>Today's Date:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.dayOneDate.slice(5) }-{ props.dayOneDate.slice(0,4) }</span></p> }
        { props.dayOneDescription && <p className="center-align"><label>Today's Conditions:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.dayOneDescription }</span></p> }
        { props.dayOneMaxTemp && <p className="center-align"><label>Today's Max Temp:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.dayOneMaxTemp }</span></p> }
        { props.dayOneMinTemp && <p className="center-align bottom-margin"><label>Today's Min Temp:&nbsp;&nbsp;</label><span>&nbsp;&nbsp;{ props.dayOneMinTemp }</span></p> }
        { props.error && <p className="top-margin">{ props.error }</p> }
        <div className="row">
            { props.dayTwoDescription && props.dayTwoMaxTemp && props.dayTwoMinTemp && <div className="col s12 m4"><div className="card-panel light-blue center-align day-info"><p className="day-title">{ props.dayTwoDate.slice(5) }-{ props.dayOneDate.slice(0,4) }</p><p>{ props.dayTwoDescription }</p><p>Max Temp: { props.dayTwoMaxTemp }</p><p>Min Temp: { props.dayTwoMinTemp }</p></div></div> }
            { props.dayThreeDescription && props.dayThreeMaxTemp && props.dayThreeMinTemp && <div className="col s12 m4"><div className="card-panel light-blue darken-3 center-align day-info"><p className="day-title">{ props.dayThreeDate.slice(5) }-{ props.dayOneDate.slice(0,4) }</p><p>{ props.dayThreeDescription }</p><p>Max Temp: { props.dayThreeMaxTemp }</p><p>Min Temp: { props.dayThreeMinTemp }</p></div></div> }
            { props.dayFourDescription && props.dayFourMaxTemp && props.dayFourMinTemp && <div className="col s12 m4"><div className="card-panel light-blue center-align day-info"><p className="day-title">{ props.dayFourDate.slice(5) }-{ props.dayOneDate.slice(0,4) }</p><p>{ props.dayFourDescription }</p><p>Max Temp: { props.dayFourMaxTemp }</p><p>Min Temp: { props.dayFourMinTemp }</p></div></div> }
            { props.dayFiveDescription && props.dayFiveMaxTemp && props.dayFiveMinTemp && <div className="col s12 m4"><div className="card-panel light-blue darken-3 center-align day-info"><p className="day-title">{ props.dayFiveDate.slice(5) }-{ props.dayOneDate.slice(0,4) }</p><p>{ props.dayFiveDescription }</p><p>Max Temp: { props.dayFiveMaxTemp }</p><p>Min Temp: { props.dayFiveMinTemp }</p></div></div> }
            { props.daySixDescription && props.daySixMaxTemp && props.daySixMinTemp && <div className="col s12 m4"><div className="card-panel light-blue center-align day-info"><p className="day-title">{ props.daySixDate.slice(5) }-{ props.dayOneDate.slice(0,4) }</p><p>{ props.daySixDescription }</p><p>Max Temp: { props.daySixMaxTemp }</p><p>Min Temp: { props.daySixMinTemp }</p></div></div> }
            { props.daySevenDescription && props.daySevenMaxTemp && props.daySevenMinTemp && <div className="col s12 m4"><div className="card-panel light-blue darken-3 center-align day-info"><p className="day-title">{ props.daySevenDate.slice(5) }-{ props.dayOneDate.slice(0,4) }</p><p>{ props.daySevenDescription }</p><p>Max Temp: { props.daySevenMaxTemp }</p><p>Min Temp: { props.daySevenMinTemp }</p></div></div> }
        </div>
    </div>
);

export default Weather;