/* eslint-disable indent */
import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import QuickImage from '../react-quick-image';

describe('<QuickImage />', () => {
  it('renders a .quick-image', () => {
    const wrapper = shallow(<QuickImage />);
    expect(wrapper.find('.quick-image')).to.have.length(1);
  });
});

describe('<QuickImage />', () => {
  it('allows props to be set', () => {
    const wrapper = mount(<QuickImage find='cat' />);
    expect(wrapper.props().find).to.equal('cat');
    wrapper.setProps({ find: 'dog'});
    expect(wrapper.props().find).to.equal('dog');
  });
});

describe('<QuickImage />', () => {
  it('renders a .quick-image', () => {
    const wrapper = render(<QuickImage />);
    expect(wrapper.find('.quick-image')).to.have.length(1);
  });
});