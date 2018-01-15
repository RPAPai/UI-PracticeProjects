import React from 'react';
import ReactDOM from 'react-dom';
import {MyComponent} from './components/MyComponent';
import {HelloPlanet} from './components/HelloPlanet';

ReactDOM.render(
    <div>
        <MyComponent />
        <HelloPlanet />
    </div>,
    document.getElementById('firstapp')
);