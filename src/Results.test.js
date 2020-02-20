import React from 'react'
import renderer from 'react-test-renderer';
import Results from './Results.js';

test('renders Results.js correctly', () => {
    const tree = renderer
        .create(<Results />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});