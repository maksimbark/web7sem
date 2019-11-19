import React, {Component} from 'react'
import WeatherPack from './WeatherPack/'


class LargeCityInfo extends Component {

    state = {
        problems: false,
        isLoaded: false,
        connectProblems: false
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

        const errorMsg = (
            <div className="alert alert-danger">Произошла ошибка при попытке получить местоположение, отображен город
                по умолчанию
                <button onClick={() => navigator.geolocation.getCurrentPosition(this.setPosition, this.setFail)}
                        className="btn ml-auto">Повторить попытку получить местоположение
                </button>
            </div>
        );

        if (this.state.connectProblems) {
            return (
                <div className="alert alert-danger">Произошла ошибка при попытке получить данные
                    <button onClick={() => navigator.geolocation.getCurrentPosition(this.setPosition, this.setFail)}
                            className="btn ml-auto">Повторить попытку получить данные
                    </button>
                </div>
            )
        }

        if (this.state.isLoaded) {
            const icon = this.state.serverInfo.weather[0].icon;
            const temp = this.state.serverInfo.main.temp;
            return (
                <div className="row">
                    <div className="col">
                        {this.state.problems ? errorMsg : ''}
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
        await this.setState({isLoaded: false, connectProblems: false});

        fetch('http://localhost:3001/weather/coordinates/?lat=' + lat + '&lon=' + lon)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;

            })
            .then((response) => response.json())
            .then((response) => {
                this.setState(
                    {
                        serverInfo: response,
                        isLoaded: true,
                        connectProblems: false
                    })
            })
            .catch(() => {
                    this.setState(
                        {
                            connectProblems: true
                        })
                }
            );

    };

    setPosition = (position) => {
        this.setState({isLoaded: false});
        this.getWeather(position.coords.latitude, position.coords.longitude);
    };

    setFail = () => {
        this.setState({isLoaded: false});
        this.getWeather(59.937500, 30.308611);
        this.setState({problems: true});
    };

}

export default LargeCityInfo
