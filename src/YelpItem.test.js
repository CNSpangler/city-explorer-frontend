import React from 'react'
import renderer from 'react-test-renderer';
import YelpItem from './YelpItem.js';

test('renders YelpItem.js correctly', () => {
    const tree = renderer
        .create(<YelpItem />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});