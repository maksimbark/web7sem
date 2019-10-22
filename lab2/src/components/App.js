import React from 'react';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import LargeCityInfo from "./LargeCityInfo";
import FavoriteCityPack from './FavoriteCityPack'
import configureStore from '../store/configureStore';
import {PersistGate} from 'redux-persist/integration/react'

const {store, persistor} = configureStore();

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-2">Погода для тебя</h1>
            </div>
            <LargeCityInfo/>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <FavoriteCityPack/>
                </PersistGate>
            </Provider>
        </div>
    )
}


export default App