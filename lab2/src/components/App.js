import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import LargeCityInfo from "./LargeCityInfo";

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
            <h1 className="display-2">Погода для тебя</h1>
            </div>
           <LargeCityInfo />
        </div>
    )
}


export default App