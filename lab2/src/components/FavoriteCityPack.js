import React, {Component} from 'react'
import MiniCityInfo from './MiniCityInfo'


class FavoriteCityPack extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {

                            this.props.fav.map((favCity, i = 0) => {
                                    i++;
                                    return (
                                        [
                                            <MiniCityInfo serverInfo={favCity.state} />,
                                            i % 2 === 0 && <div className="w-100" />
                                        ]
                                    )

                                }
                            )

                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default FavoriteCityPack
