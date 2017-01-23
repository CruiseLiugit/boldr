import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Flag from './Flag';
import style from './style.css';

describe('(React Component) Flag', () => {
  let requiredProps = {};

  beforeEach(() => {
    requiredProps = {
      asset: props => <img src="http://placehold.it/300x300" { ...props } />,
    };
  });

  it('should render the passed label.', () => {
    const wrapper = shallow(<Flag { ...requiredProps }>My Contents</Flag>);

    expect(wrapper.html()).toContain('My Contents');
  });

  it('should add the passed "className" prop to the rendered node if passed.', () => {
    const wrapper = shallow(<Flag { ...requiredProps } className="test">My Contents</Flag>);
    expect(wrapper.find('.test').length).toBe(1);
  });

  it('should render the image.', () => {
    const wrapper = shallow(<Flag { ...requiredProps }>My Contents</Flag>);
    const image = wrapper.find(`.${style.img}`);

    expect(image).toHaveLength(1);
    expect(image.html()).toContain('http://placehold.it/300x300');
  });

  it('should propagate props to the wrapper element.', () => {
    const handler = sinon.spy();
    const wrapper = mount(
			<Flag { ...requiredProps } onClick={ handler }>My Contents</Flag>
		);

    wrapper.simulate('click');

    expect(handler.calledOnce).toEqual(true);
  });
});
