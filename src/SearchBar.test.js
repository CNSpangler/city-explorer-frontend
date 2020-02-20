import React from 'react'
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar.js';

test('renders SearchBar.js correctly', () => {
    const tree = renderer
        .create(<SearchBar />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});