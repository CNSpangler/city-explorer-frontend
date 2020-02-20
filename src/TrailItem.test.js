import React from 'react'
import renderer from 'react-test-renderer';
import TrailItem from './TrailItem.js';

test('renders TrailItem.js correctly', () => {
    const tree = renderer
        .create(<TrailItem />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});