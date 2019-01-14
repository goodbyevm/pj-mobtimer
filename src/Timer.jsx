import React, {Component} from 'react';
import Countdown from 'react-countdown-now';

class Timer extends Component {
    render () {
        return (
            <div className="Timer">
            <Countdown date={Date.now() + 10000} />
            </div>
        );
    }
}

export default Timer;
