import React, {Component} from 'react'
import WeatherPack from './WeatherPack/'

class MiniCityInfo extends Component {

    state = {
        problems: false,
        isLoaded: true
    };


    render() {
        const loadDump = (
            <div className="col text-center">
                <h2>Происходит загрузка, подождите</h2>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

        if (this.state.problems) {
            return (
                <div className="alert alert-danger">Произошла ошибка при попытке получить данные</div>
            )
        }

        if (this.state.isLoaded) {
            const icon = this.props.serverInfo.weather[0].icon;
            return (
                <div className="col" style={{ paddingRight: 0 }}>
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="p-2">{this.props.serverInfo.name}</h4>
                        <h4 className="p-2 ml-auto">{this.props.serverInfo.main.temp}˚C</h4>
                        <img className="p-2 ml-auto" alt="icon"
                             src={'https://openweathermap.org/img/wn/' + icon + '.png'}/>
                        <button className="btn btn-default p-2 ml-auto">X</button>
                    </div>

                    <WeatherPack serverInfo={this.props.serverInfo}/>
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


}

export default MiniCityInfo