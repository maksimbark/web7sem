import React, {Component} from 'react'
import WeatherPack from './WeatherPack/'
import "./ApiRequester"


class LargeCityInfo extends Component {

    state = {
        problems: false,
        isLoaded: false
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.setPosition, this.setFail);
    }

    render() {
        const loadDump = (
            <div className="row">
                <div className="col text-center">
                    <h2>Происходит загрузка, подождите</h2>
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );

        if (this.state.problems) {
            return (
                <div className="alert alert-danger">Произошла ошибка при попытке получить данные</div>
            )
        }

        if (this.state.isLoaded) {
            const icon = this.state.serverInfo.weather[0].icon;
            const temp = this.state.serverInfo.main.temp;
            return (
                <div className="row">
                    <div className="col">
                        <h2>{this.state.serverInfo.name}</h2>
                        <div className="row">
                            <div className="col">
                                <img alt="icon" src={'https://openweathermap.org/img/wn/' + icon + '@2x.png'}/>
                            </div>
                            <div className="col">
                                <p style={{'fontSize': '3.9vw'}}>{temp}˚C </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <WeatherPack serverInfo={this.state.serverInfo}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    {loadDump}
                </div>
            )
        }
    };

    getWeather = async (lat, lon) => {

        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=3c6464a2f6bcbeecf2f55441edb741ce&units=metric&lang=ru');
        if (response.ok) {
            let json = await response.json();
            this.setState(
                {
                    serverInfo: json,
                    isLoaded: true
                }
            )
        } else {
            this.setFail()
        }
    };

    setPosition = (position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
    };

    setFail = () => {
        this.setState({problems: true})
    };

}

export default LargeCityInfo
