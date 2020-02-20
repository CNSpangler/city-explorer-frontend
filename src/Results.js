import React, { Component } from 'react'
import WeatherItem from './WeatherItem.js';
import YelpItem from './YelpItem.js';
import EventItem from './EventItem.js';
import TrailItem from './TrailItem.js';

export default class Results extends Component {
    render() {
        return (
            <div>
                <WeatherItem />
                <YelpItem />
                <EventItem />
                <TrailItem />
            </div>
        )
    }
}
