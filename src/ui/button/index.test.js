import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Button from 'UI/button';

describe('Button', () => {
  it('should render', () => {
    const component = shallow(
      <Button type='button'>Я кнопочка</Button>
    );

    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
