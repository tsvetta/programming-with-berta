import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Button from './';

describe('Button', () => {
  it('should render', () => {
    const component = shallow(<Button type='button'>Я кнопочка</Button>);

    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should be clicked', () => {
    const handleClick = jest.fn();
    const component = shallow(<Button type='button' onClick={handleClick}>Я кнопочка</Button>);

    component.simulate('click');

    expect(handleClick).toHaveBeenCalled();
  });
});
