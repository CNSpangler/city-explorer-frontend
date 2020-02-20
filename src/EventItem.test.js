import React from 'react'
import renderer from 'react-test-renderer';
import EventItem from './EventItem.js';

test('renders EventItem.js correctly', () => {
    const tree = renderer
      .create(<EventItem />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });