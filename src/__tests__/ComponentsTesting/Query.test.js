import React from 'react';
import renderer from 'react-test-renderer';
import Query from '../../component/Query';

describe('Searching', () => {
  it('renderers search correctly', () => {
    const tree = renderer
      .create(
        <Query
          country="China"
          handleChange={() => 7 + 4}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
