import React from 'react';
import {render} from 'react-dom'
import App from './components/App'


fetch('http://localhost:3001/')
    .then(() => {
            render(<App/>, document.getElementById('root'))
        }
    )
    .catch(() => {
        render(<div className="col col-6 alert alert-danger">Бекенд недоступен, попробуйте
            позднее </div>, document.getElementById('root'));
    });


