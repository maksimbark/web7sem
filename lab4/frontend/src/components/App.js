import React from 'react';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import LargeCityInfo from "./LargeCityInfo";
import FavoriteCityPack from './FavoriteCityPack'
import configureStore from '../store/configureStore';


const store = configureStore();

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-2">Погода для тебя</h1>
            </div>
            <LargeCityInfo/>
            <Provider store={store}>
                    <FavoriteCityPack/>
            </Provider>
        </div>
    )
}


export default App