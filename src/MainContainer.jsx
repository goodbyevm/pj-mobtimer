import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Participants from './Participants'

class MainContainer extends Component {

    render() {
        return (
            <div>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Source Code Pro' rel='stylesheet'/>
            </head>
            <body className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>
                    Mobtimer
                </p>
            </header>

            <Participants/>
            <Timer/>
            </body>
            </div>

        );
    }
}

export default MainContainer;
