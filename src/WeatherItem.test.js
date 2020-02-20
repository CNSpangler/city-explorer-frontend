import React from 'react'
import renderer from 'react-test-renderer';
import WeatherItem from './WeatherItem.js';

test('renders WeatherItem.js correctly', () => {
    const tree = renderer
        .create(<WeatherItem />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});