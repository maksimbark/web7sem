import React, {Component} from 'react'
import WeatherPack from './WeatherPack/'
import {doDeleteItem, itemsFetchData} from "../actions/items";
import {connect} from "react-redux";


class MiniCityInfo extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.serverInfo.city);
    }

    render() {
        const loadDump = (
            <div className="col text-center">
                <h2>Происходит загрузка {this.props.serverInfo.city}, подождите</h2>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

        if (this.props.serverInfo.isErrored) {
            return (
                <div className="alert alert-danger">Произошла ошибка при попытке получить данные</div>
            )
        }

        if (this.props.serverInfo.isLoaded) {
            const icon = this.props.serverInfo.data.weather[0].icon;
            return (
                <div className="col">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="p-2">{this.props.serverInfo.data.name}</h4>
                        <h4 className="p-2 ml-auto">{this.props.serverInfo.data.main.temp}˚C</h4>
                        <img className="p-2 ml-auto" alt="icon"
                             src={'https://openweathermap.org/img/wn/' + icon + '.png'}/>
                        <button onClick={() => this.props.delete(this.props.serverInfo.city)} className="btn btn-default p-2 ml-auto">X</button>
                    </div>

                    <WeatherPack serverInfo={this.props.serverInfo.data}/>
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

const mapStateToProps = (state) => {
    return {
        items: state.items,
        //hasErrored: state.itemsHasErrored,
        //isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        delete: (city) => dispatch(doDeleteItem(city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCityInfo);