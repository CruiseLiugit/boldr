import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('<Footer />, should have footer__wrap as its class', () => {
  const wrapper = shallow(<Footer />);
  const wrapperClass = wrapper.find('.boldr-footer');
  expect(wrapperClass.is('.boldr-footer')).toBe(true);
});
