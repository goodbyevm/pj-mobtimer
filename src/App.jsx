import React, { Component } from 'react';
import './App.css';
import MobTimer from './MobTimer';
import Participants from './Participants'

class App extends Component {
    render() {
        return (

            <body className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>
                    Edit <code>src/App.js</code> and saver to reload.
                </p>
            </header>

            <Participants className="Participants"/>
            <MobTimer/>
            </body>

        );
    }
}

export default App;
