import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class WeatherEntity extends Component {

    render() {
        const {data} = this.props;

        return (
            <div className="alert alert-dark d-flex">
                <div>{data.type}</div>
                <div className="ml-auto">{data.value}</div>
            </div>
        )
    }

}

export default WeatherEntity