import React from 'react';
import moment from 'moment';
import './time.css';

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return <span className="time">{timeString}</span>
};
export default Time;